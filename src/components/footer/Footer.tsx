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
import { meetingAPI } from '@/api';
import { setCode } from '@/store/feature/meetingType/groupReducer';
import { changeDepartment, changeStudentType } from '@/utils';

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
  const commonState = useAppSelector(state => state.common);
  const groupState = useAppSelector(state => state.group);
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
      if (meetingType === 'groupLeader' || meetingType === 'groupMember') {
        dispatch(resetAll());
        router.push('/apply');
        return;
      }
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
      switch (meetingType) {
        case 'personal':
          meetingAPI
            .postTeamInfo(
              { teamType: 'SINGLE', isTeamLeader: true },
              {
                informationDistance: '01010101',
                informationFilter: '010101',
                informationMeetingTime: '',
                preferenceDistance: '010101',
                preferenceFilter: '0101011',
              },
            )
            .then(() => {
              router.push('/apply/complete');
            });
          break;
        case 'groupLeader':
          meetingAPI
            .postTeamInfo(
              { teamType: 'TRIPLE', isTeamLeader: true },
              {
                informationDistance: '',
                informationFilter: '',
                informationMeetingTime: '',
                preferenceDistance: '',
                preferenceFilter: '',
              },
            )
            .then(() => {
              router.push('/apply/complete');
            });
          break;
        case 'groupMember':
          meetingAPI
            .postTeamInfo(
              { teamType: 'TRIPLE', isTeamLeader: false },
              {
                informationDistance: '',
                informationFilter: '',
                informationMeetingTime: '',
                preferenceDistance: '',
                preferenceFilter: '',
              },
            )
            .then(() => {
              router.push('/apply/complete');
            });
          break;

        default:
          break;
      }
    }

    // 기본
    if (type !== 'lastPage') {
      if (meetingType === 'personal' && curStep === 1 && curPage === 2)
        /** personal일 때 user 정보 업데이트 */
        meetingAPI.updateUser({
          birthYear: commonState.info_age.data,
          gender: commonState.info_gender.data === '남자' ? 'MALE' : 'FEMALE',
          department: changeDepartment(commonState.info_major.data),
          studentType: changeStudentType(commonState.info_studentType.data),
          smoking: commonState.info_smoking.data === '흡연' ? true : false,
          spiritAnimal: 'a',
          mbti: 'a',
          interest: 'a',
          height: commonState.info_height.data,
          nickname: commonState.info_nickname.data,
        }); // then login 추가!!

      /** 3대3 리더 팀 생성 */
      if (meetingType === 'groupLeader' && curStep === 2 && curPage === 1)
        meetingAPI
          .createTeam({
            teamType: 'TRIPLE',
            isTeamLeader: true,
            name: groupState.info_name.data,
          })
          .then(data => {
            dispatch(setCode(data.data));
            dispatch(incrementPage());
          })
          .catch(e => console.log(e));
      else dispatch(incrementPage());
    }

    // 마지막 step인 경우
    else {
      if (
        (meetingType === 'groupLeader' && curStep === 1) ||
        (meetingType === 'groupMember' && curStep === 1)
      ) {
        /** group일 때 user 정보 업데이트 */
        meetingAPI.updateUser({
          birthYear: commonState.info_age.data,
          gender: commonState.info_gender.data === '남자' ? 'MALE' : 'FEMALE',
          department: changeDepartment(commonState.info_major.data),
          studentType: changeStudentType(commonState.info_studentType.data),
          smoking: commonState.info_smoking.data === '흡연' ? true : false,
          spiritAnimal: 'a',
          mbti: 'a',
          interest: 'a',
          height: commonState.info_height.data,
          nickname: commonState.info_nickname.data,
        });
      }
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
