'use client';

import { Footer } from '@/components';

import { useAppDispatch, useAppSelector } from '@/store/hooks';

import FirstPage from './FirstPage';

import {
  incrementStep,
  decrementStep,
  setPage,
  resetPage,
} from '@/store/feature/applyInfo';

import { GROUP_MEMBER_MAX_PAGE_ARR } from '@/constants';

const MAX_PAGE = GROUP_MEMBER_MAX_PAGE_ARR[1];

const GroupMemberFirstStep = () => {
  const { curStep } = useAppSelector(state => state.applyInfo);
  const dispatch = useAppDispatch();
  const onClickPrev = () => {
    dispatch(setPage(GROUP_MEMBER_MAX_PAGE_ARR[curStep - 2]));
    dispatch(decrementStep());
  };
  const onClickNext = () => {
    dispatch(resetPage());
    dispatch(incrementStep());
  };
  return (
    <>
      <FirstPage />;
      <Footer
        maxPage={MAX_PAGE}
        disabled={true}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />
    </>
  );
};

export default GroupMemberFirstStep;
