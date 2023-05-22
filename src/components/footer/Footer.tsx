'use client';

import FooterStepButton from '@/components/buttons/footerStepButton/FooterStepButton';
import * as S from '@/components/footer/Footer.style';

import {
  GROUP_LEADER_MAX_PAGE_ARR,
  GROUP_MEMBER_MAX_PAGE_ARR,
  PERSONAL_MAX_PAGE_ARR,
} from '@/constants';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  incrementPage,
  decrementPage,
  incrementStep,
  decrementStep,
  setPage,
  resetAll,
  resetPage,
} from '@/store/feature/applyInfo';
import { useRouter } from 'next/navigation';

export type FooterProps = {
  maxPage: number;
  disabled?: boolean;
  type?: 'firstPage' | 'lastPage' | 'lastStep';
  onClickPrev?: () => void;
  onClickNext?: () => void;
};

const Footer = ({
  disabled = false,
  maxPage,
  type,
  onClickPrev,
  onClickNext,
}: FooterProps) => {
  const { curStep, curPage, meetingType } = useAppSelector(
    state => state.applyInfo,
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  const changePageArrByMeetingType = () => {
    switch (meetingType) {
      case 'personal':
        return PERSONAL_MAX_PAGE_ARR[curStep - 2];
      case 'groupLeader':
        return GROUP_LEADER_MAX_PAGE_ARR[curStep - 2];
      case 'groupMember':
        return GROUP_MEMBER_MAX_PAGE_ARR[curStep - 2];
      default:
        return 0;
    }
  };

  const onClickStepPrev = () => {
    // 처음 step, page인 경우
    if (type === 'firstPage' && curStep === 1) {
      dispatch(resetAll());
      router.push('/apply');
      return;
    }
    // 마지막 step, page인 경우
    if (type === 'lastStep') {
      dispatch(setPage(changePageArrByMeetingType()));
      dispatch(decrementStep());
      return;
    }

    // 기본
    if (type !== 'firstPage') dispatch(decrementPage());
    // 처음 step인 경우
    else {
      dispatch(setPage(changePageArrByMeetingType()));
      dispatch(decrementStep());
    }
  };

  const onClickStepNext = () => {
    // 마지막 step, page인 경우
    if (type === 'lastStep') {
      dispatch(resetAll());
      // api POST 로직
      router.push('/apply/complete'); // 신청완료 페이지로
    }

    // 기본
    if (type !== 'lastPage') dispatch(incrementPage());
    // 마지막 step인 경우
    else {
      dispatch(resetPage());
      dispatch(incrementStep());
    }
  };

  return (
    <S.StepHandler>
      <FooterStepButton
        type={'prev'}
        onClick={onClickPrev || onClickStepPrev}
      ></FooterStepButton>
      <S.StepText>{`${curPage} / ${maxPage}`}</S.StepText>
      <FooterStepButton
        type={'next'}
        disabled={disabled}
        onClick={disabled ? undefined : onClickNext || onClickStepNext}
      ></FooterStepButton>
    </S.StepHandler>
  );
};

export default Footer;
