'use client';

import { useEffect, useState } from 'react';

import { Footer } from '@/components';

import { useAppSelector } from '@/store/hooks';
import { ApplyInfoState } from '@/store/feature/applyInfo';

import FirstPage from '@/page/common/applyMyInfoStep/FirstPage';
import SecondPage from '@/page/common/applyMyInfoStep/SecondPage';

import {
  GROUP_LEADER_MAX_PAGE_ARR,
  GROUP_MEMBER_MAX_PAGE_ARR,
} from '@/constants';
import useCurPageReset from '@/hooks/useCurPageReset';

const ApplyMyInfoStep = () => {
  const { curPage, meetingType } = useAppSelector(state => state.applyInfo);

  const returnMaxPage = () => {
    switch (meetingType) {
      case 'groupLeader':
        return GROUP_LEADER_MAX_PAGE_ARR[0];
      case 'groupMember':
        return GROUP_MEMBER_MAX_PAGE_ARR[0];
      default:
        return 0;
    }
  };

  const [isFinishPage, setIsFinishPage] = useState(false);

  useCurPageReset({ setIsFinishPage, curPage });

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
      case returnMaxPage():
        return 'lastPage';
      default:
        return;
    }
  };
  return (
    <>
      {changePage(curPage)}
      <Footer
        maxPage={returnMaxPage()}
        disabled={!isFinishPage}
        type={switchPageType()}
      />
    </>
  );
};

export default ApplyMyInfoStep;
