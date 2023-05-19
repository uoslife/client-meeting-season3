'use client';

import { ProgressHeader } from '@/components';
import { usePathname } from 'next/navigation';

const Template = ({ children }: { children: React.ReactNode }) => {
  const changeIsProgressBar = () => {
    return (
      usePathname() === '/apply/personal' ||
      usePathname() === '/apply/groupowner'
    );
  };
  const returnHeaderTitle = () => {
    const pathname = usePathname();
    switch (pathname) {
      case '/apply':
        return '시대팅 종류 선택';

      case '/apply/branching':
        return '3대3 미팅';
      default:
        return undefined;
    }
  };
  return (
    <>
      <ProgressHeader
        isprogress={true}
        isprogressbar={changeIsProgressBar()}
        title={returnHeaderTitle()}
      />
      {children}
    </>
  );
};

export default Template;
