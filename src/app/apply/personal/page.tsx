'use client';

import dynamic from 'next/dynamic';

import { ApplyInfoState } from '@/store/feature/applyInfo';
import { useAppSelector } from '@/store/hooks';

const Personal = () => {
  const applyInfo = useAppSelector(state => state.applyInfo);

  const FirstPage = dynamic(() => import('@/pages/personal/FirstPage'));
  // const SecondPage = dynamic(() => import('@/pages/personal/SecondPage'));
  // const ThirdPage = dynamic(() => import('@/pages/personal/ThirdPage'));
  // const FourthPage = dynamic(() => import('@/pages/personal/FourthPage'));
  // const FifthPage = dynamic(() => import('@/pages/personal/FifthPage'));
  // const SixthPage = dynamic(() => import('@/pages/personal/SixthPage'));

  const switchPage = (applyInfo: ApplyInfoState) => {
    switch (applyInfo.curPage) {
      case 0:
        return <FirstPage />;
      // case 1:
      //   return dynamic(() => import('@/pages/personal/SecondPage'));
      // case 2:
      //   return dynamic(() => import('@/pages/personal/ThirdPage'));
      // case 3:
      //   return dynamic(() => import('@/pages/personal/FourthPage'));
      // case 4:
      //   return dynamic(() => import('@/pages/personal/FifthPage'));
      // case 5:
      //   return dynamic(() => import('@/pages/personal/SixthPage'));
      default:
        return <></>;
    }
  };

  return (
    <>
      {/* header */}
      {switchPage(applyInfo)}
    </>
  );
};

export default Personal;
