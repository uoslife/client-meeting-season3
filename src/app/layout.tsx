'use client';

import { authAPI } from '@/api';
import { Providers } from '@/store/provider';
import { NativeActions } from '@/utils/native/actions';
import { NativeBridge } from '@/utils/native/bridge';
import { useState, useEffect } from 'react';
import { UserIdContext } from '@/utils/context/userIdContext';

import StyledComponentsRegistry from '@/lib/registry';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [topMargin, setTopMargin] = useState<number>(0);
  const [userId, setUserId] = useState<number>(0);

  const loginWithDevice = async (nativeActions: NativeActions) => {
    const [device_id, secret] = await Promise.all([
      nativeActions.getDeviceId(),
      nativeActions.getDeviceSecret(),
    ]);

    if (!device_id || !secret) {
      // web, production
      if (process.env.NODE_ENV === 'production') return;
      // web, development
      else if (process.env.NODE_ENV === 'development') {
        return authAPI.registerDevice({
          device_id: process.env.NEXT_PUBLIC_DEVICE_ID as string,
          secret: process.env.NEXT_PUBLIC_DEVICE_SECRET as string,
        });
      }
    } else {
      /** mobile, production */
      return authAPI.registerDevice({
        device_id,
        secret,
      });
    }
  };
  const handleTopMargin = async (nativeActions: NativeActions) => {
    const topMargin = await nativeActions.getSafeArea();
    return topMargin || 0;
  };

  useEffect(() => {
    const nativeActions = new NativeActions(new NativeBridge());
    loginWithDevice(nativeActions).then();
    handleTopMargin(nativeActions).then(margin => setTopMargin(margin));
  }, []);

  history.pushState(null, '', location.href);
  window.onpopstate = () => {
    history.go(1);
  };

  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=414, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>시대팅</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css"
        />
      </head>
      <body style={{ paddingTop: `${topMargin}px` }}>
        <UserIdContext.Provider value={{ userId, setUserId }}>
          <StyledComponentsRegistry>
            <Providers>{children}</Providers>
          </StyledComponentsRegistry>
        </UserIdContext.Provider>
      </body>
    </html>
  );
};

export default RootLayout;
