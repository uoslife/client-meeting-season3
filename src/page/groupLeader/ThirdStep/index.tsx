'use client';

import { useState } from 'react';

import { Footer } from '@/components';

import { useAppDispatch, useAppSelector } from '@/store/hooks';

import FirstPage from './FirstPage';

import {
  incrementStep,
  decrementStep,
  setPage,
  resetPage,
} from '@/store/feature/applyInfo';

import { GROUP_MAX_PAGE_ARR } from '@/constants';

const MAX_PAGE = GROUP_MAX_PAGE_ARR[2];

const GroupThirdStep = () => {
  const { curStep } = useAppSelector(state => state.applyInfo);
  const dispatch = useAppDispatch();
  const onClickPrev = () => {
    dispatch(setPage(GROUP_MAX_PAGE_ARR[curStep - 2]));
    dispatch(decrementStep());
  };
  const onClickNext = () => {
    dispatch(resetPage());
    dispatch(incrementStep());
  };
  const [isFinishPage, setIsFinishPage] = useState(false);
  return (
    <>
      <FirstPage setIsFinishPage={setIsFinishPage} />;
      <Footer
        maxPage={MAX_PAGE}
        disabled={isFinishPage}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />
    </>
  );
};

export default GroupThirdStep;
