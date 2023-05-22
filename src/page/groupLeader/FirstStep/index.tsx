'use client';

import { useEffect, useState } from 'react';

import { Footer } from '@/components';

import { useAppSelector } from '@/store/hooks';
import { ApplyInfoState } from '@/store/feature/applyInfo';

import FirstPage from '@/page/common/applyMyInfoStep/FirstPage';
import SecondPage from '@/page/common/applyMyInfoStep/SecondPage';

import { GROUP_LEADER_MAX_PAGE_ARR } from '@/constants';

const MAX_PAGE = GROUP_LEADER_MAX_PAGE_ARR[0];

const GroupLeaderFirstStep = () => {
  const { curPage } = useAppSelector(state => state.applyInfo);

  const [isFinishPage, setIsFinishPage] = useState(false);

  useEffect(() => {
    setIsFinishPage(false);
  }, [curPage]);
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
        disabled={isFinishPage}
        type={switchPageType()}
      />
    </>
  );
};

export default GroupLeaderFirstStep;
