'use client';

import { useState } from 'react';

import { Footer } from '@/components';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  incrementStep,
  decrementStep,
  setPage,
  resetPage,
} from '@/store/feature/applyInfo';
import { PERSONAL_MAX_PAGE_ARR, GROUP_LEADER_MAX_PAGE_ARR } from '@/constants';

const ConfirmStep = () => {
  const [isFinishPage, setIsFinishPage] = useState(false);

  const { curStep, meetingType } = useAppSelector(state => state.applyInfo);
  const dispatch = useAppDispatch();
  const isPersonal = meetingType === 'personal';
  const onClickPrev = () => {
    dispatch(
      setPage(
        isPersonal
          ? PERSONAL_MAX_PAGE_ARR[curStep - 2]
          : GROUP_LEADER_MAX_PAGE_ARR[curStep - 2],
      ),
    );
    dispatch(decrementStep());
  };
  const onClickNext = () => {
    dispatch(resetPage());
    dispatch(incrementStep());
  };

  return (
    <>
      <Footer
        maxPage={1}
        disabled={isFinishPage}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />
    </>
  );
};

export default ConfirmStep;
