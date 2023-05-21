'use client';

import { useState } from 'react';

import { Footer } from '@/components';

import { useAppSelector } from '@/store/hooks';
import { ApplyInfoState } from '@/store/feature/applyInfo';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';

const MAX_PAGE = 6;

const SecondStep = () => {
  const { curPage } = useAppSelector(state => state.applyInfo);

  const [isFinishPage, setIsFinishPage] = useState(false);

  const changePage = (curPage: ApplyInfoState['curPage']) => {
    switch (curPage) {
      case 1:
        return <FirstPage setIsFinishPage={setIsFinishPage} />;
      case 2:
        return <SecondPage setIsFinishPage={setIsFinishPage} />;
      case 3:
        return <ThirdPage setIsFinishPage={setIsFinishPage} />;
      case 4:
        return <FourthPage setIsFinishPage={setIsFinishPage} />;
      case 5:
        return <FifthPage setIsFinishPage={setIsFinishPage} />;
      case 6:
        return <SixthPage setIsFinishPage={setIsFinishPage} />;
      default:
        return <></>;
    }
  };

  const switchPageType = () => {
    switch (curPage) {
      case 1:
        return 'firstPage';
      case MAX_PAGE:
        return 'lastPage';
      default:
        return;
    }
  };
  return (
    <>
      {changePage(curPage)}
      <Footer
        maxPage={MAX_PAGE}
        disabled={isFinishPage}
        type={switchPageType()}
      />
    </>
  );
};

export default SecondStep;
