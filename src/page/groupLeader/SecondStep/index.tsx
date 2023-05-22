'use client';

import { useEffect, useState } from 'react';

import { Footer, ProgressHeader } from '@/components';

import { useAppSelector } from '@/store/hooks';
import { ApplyInfoState } from '@/store/feature/applyInfo';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

import { GROUP_LEADER_MAX_PAGE_ARR } from '@/constants';
import useCurPageReset from '@/hooks/useCurPageReset';

const MAX_PAGE = GROUP_LEADER_MAX_PAGE_ARR[1];

const GroupLeaderSecondStep = () => {
  const { curPage } = useAppSelector(state => state.applyInfo);

  const [isFinishPage, setIsFinishPage] = useState(false);

  // current Page 초기화
  useCurPageReset({ curPage, setIsFinishPage });

  const changePage = (curPage: ApplyInfoState['curPage']) => {
    switch (curPage) {
      case 1:
        return <FirstPage setIsFinishPage={setIsFinishPage} />;
      case 2:
        return <SecondPage setIsFinishPage={setIsFinishPage} />;
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
        disabled={!isFinishPage}
        type={switchPageType()}
      />
    </>
  );
};

export default GroupLeaderSecondStep;
