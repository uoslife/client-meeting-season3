'use client';

import { ProgressHeader } from '@/components';
import { usePathname } from 'next/navigation';

const Template = ({ children }: { children: React.ReactNode }) => {
  const changeIsProgress = () => {
    return (
      usePathname() !== '/apply/complete' && usePathname() !== '/apply/confirm'
    );
  };
  const changeIsProgressBar = () => {
    return (
      usePathname() === '/apply/personal' ||
      usePathname() === '/apply/groupLeader'
    );
  };
  const returnHeaderTitle = () => {
    const pathname = usePathname();
    switch (pathname) {
      case '/apply':
        return '시대팅 종류 선택';
      case '/apply/branching':
        return '3대3 미팅';
      case '/apply/complete':
        return '신청 완료!';
      case '/apply/confirm':
        return '신청 정보';
      default:
        return undefined;
    }
  };
  return (
    <>
      <ProgressHeader
        isprogress={changeIsProgress()}
        isprogressbar={changeIsProgressBar()}
        title={returnHeaderTitle()}
      />
      {children}
    </>
  );
};

export default Template;
