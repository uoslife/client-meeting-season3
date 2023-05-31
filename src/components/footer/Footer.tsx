'use client';

import FooterStepButton from '@/components/buttons/footerStepButton/FooterStepButton';
import * as S from '@/components/footer/Footer.style';
import { Toast } from '@/components';

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
import {
  resetAllGroupState,
  setCode,
} from '@/store/feature/meetingType/groupReducer';
import { changeDepartment, changeStudentType } from '@/utils';
import { resetAllCommonState } from '@/store/feature/common/commonReducer';
import { resetAllPersonalState } from '@/store/feature/meetingType/personalReducer';
import { infoToBinary } from '@/utils/binary/informationToBinary';
import { useState } from 'react';
import BottomSheet from '../modal/bottomSheet/BottomSheet';

export type FooterProps = {
  maxPage: number;
  disabled?: boolean;
  type?: 'firstPage' | 'lastPage' | 'lastStep';
  onClickPrev?: () => void;
  onClickNext?: () => void;
  handleDoubleCheckInfo?: () => void;
};

const Footer = ({
  disabled = false,
  maxPage,
  type,
  onClickPrev,
  onClickNext,
  handleDoubleCheckInfo,
}: FooterProps) => {
  const { curStep, curPage, meetingType } = useAppSelector(
    state => state.applyInfo,
  );
  const commonState = useAppSelector(state => state.common);
  const personalState = useAppSelector(state => state.personal);
  const groupState = useAppSelector(state => state.group);
  const dispatch = useAppDispatch();
  const router = useRouter();

  /** 안내 모달 */
  const [infoToastOpen, setInfoToastOpen] = useState(false);

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

  /** 비정상적인 접근시 취소 가능하도록 팝업 */
  const [isModal, setIsModal] = useState(false);

  const onClickPrimary = () => {
    meetingAPI
      .deleteTeam({ teamType: 'TRIPLE', isTeamLeader: true })
      .then(() => {
        dispatch(resetAll());
        dispatch(resetAllCommonState());
        dispatch(resetAllPersonalState());
        dispatch(resetAllGroupState());
        meetingAPI.deleteUser();
        alert('신청 취소되었습니다.');
        router.push('/');
      })
      .catch(() => {
        meetingAPI
          .deleteTeam({ teamType: 'SINGLE', isTeamLeader: true })
          .then(() => {
            dispatch(resetAll());
            dispatch(resetAllCommonState());
            dispatch(resetAllPersonalState());
            dispatch(resetAllGroupState());
            meetingAPI.deleteUser();
            alert('신청 취소되었습니다.');
            router.push('/');
          });
      });
  };
  const onClickSecondary = () => {
    setIsModal(false);
  };

  const onClickStepPrev = () => {
    // 처음 step, page인 경우
    if (type === 'firstPage' && curStep === 1) {
      if (meetingType === 'groupLeader' || meetingType === 'groupMember') {
        dispatch(resetAll());
        router.push('/apply/branching');
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
    if (type !== 'firstPage') {
      if (meetingType === 'groupLeader' && curStep === 2) {
        return;
      }
      dispatch(decrementPage());
      return;
    }
    // 처음 step인 경우
    else {
      dispatch(setPage(changePageArrByMeetingType()));
      dispatch(decrementStep());
      return;
    }
  };

  const onClickStepNext = () => {
    const groupBinaryData = new infoToBinary(
      'group',
      commonState.info_height.data,
      undefined,
      groupState.info_question.data,
      undefined,
      undefined,
      commonState.info_age.data,
      groupState.prefer_age.data,
      undefined,
      undefined,
      commonState.info_smoking.data,
      undefined,
      commonState.info_major.data,
      groupState.prefer_major.data,
      commonState.info_studentType.data,
      undefined,
      groupState.info_preferDay.data,
      groupState.prefer_atmosphere.data,
      undefined,
      '',
      '',
      '',
      '',
    );
    const personalBinaryData = new infoToBinary(
      'personal',
      commonState.info_height.data,
      personalState.prefer_height.data,
      personalState.info_question.data,
      personalState.info_mbti.data,
      personalState.prefer_mbti.data,
      commonState.info_age.data,
      personalState.prefer_age.data,
      personalState.info_animal.data,
      personalState.prefer_animal.data,
      commonState.info_smoking.data,
      personalState.prefer_smoking.data,
      commonState.info_major.data,
      personalState.prefer_major.data,
      commonState.info_studentType.data,
      personalState.prefer_studentType.data,
      undefined,
      undefined,
      personalState.info_interests.data,
      '',
      '',
      '',
      '',
    );

    // 마지막 step, page인 경우
    if (type === 'lastStep') {
      switch (meetingType) {
        case 'personal':
          meetingAPI
            .postTeamInfo(
              { teamType: 'SINGLE', isTeamLeader: true },
              {
                informationDistance:
                  personalBinaryData.totalInformationDistance(),
                informationFilter: personalBinaryData.totalInformationFilter(),
                informationMeetingTime: '',
                preferenceDistance:
                  personalBinaryData.totalPreferenceDistance(),
                preferenceFilter: personalBinaryData.totalPreferenceFilter(),
              },
            )
            .then(() => {
              dispatch(resetAll());
              dispatch(resetAllCommonState());
              dispatch(resetAllPersonalState());
              dispatch(resetAllGroupState());
              router.push('/apply/complete');
            })
            .catch(() => {
              setIsModal(true);
            });
          break;
        case 'groupLeader':
          meetingAPI
            .postTeamInfo(
              { teamType: 'TRIPLE', isTeamLeader: true },
              {
                informationDistance: groupBinaryData.totalInformationDistance(),
                informationFilter: groupBinaryData.totalInformationFilter(),
                informationMeetingTime: '',
                preferenceDistance: groupBinaryData.totalPreferenceDistance(),
                preferenceFilter: groupBinaryData.totalPreferenceFilter(),
              },
            )
            .then(() => {
              dispatch(resetAll());
              dispatch(resetAllCommonState());
              dispatch(resetAllPersonalState());
              dispatch(resetAllGroupState());
              router.push('/apply/complete');
            });
          break;
        case 'groupMember':
          router.push('/apply/complete');
          dispatch(resetAllCommonState());
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
          kakaoTalkId: commonState.info_kakaoId.data,
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
      if (meetingType === 'groupLeader' && curStep === 2 && curPage === 1) {
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
          .catch(e => {
            if (e.response.data.code === 'M11') {
              setInfoToastOpen(true);
              setTimeout(() => {
                setInfoToastOpen(false);
              }, 5000);
              return;
            }
            if (e.response.data.code === 'M02') {
              setIsModal(true);
              return;
            }
          });
      } else dispatch(incrementPage());
    }

    // 마지막 page인 경우
    else {
      if (
        (meetingType === 'groupLeader' && curStep === 1) ||
        (meetingType === 'groupMember' && curStep === 1)
      ) {
        /** group일 때 user 정보 업데이트 */
        meetingAPI.updateUser({
          birthYear: commonState.info_age.data,
          gender: commonState.info_gender.data === '남자' ? 'MALE' : 'FEMALE',
          kakaoTalkId: commonState.info_kakaoId.data,
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
    <>
      <S.StepHandler>
        <FooterStepButton
          type={'prev'}
          onClick={onClickPrev || onClickStepPrev}
        ></FooterStepButton>
        <S.StepText>{`${curPage} / ${maxPage}`}</S.StepText>
        <FooterStepButton
          type={'next'}
          disabled={disabled}
          onClick={
            disabled
              ? handleDoubleCheckInfo || undefined
              : onClickNext || onClickStepNext
          }
        ></FooterStepButton>
        <BottomSheet
          isActive={isModal}
          subTitle={`오류가 발생했습니다. 아래 확인 버튼을 누른 후 다시 신청해주세요`}
          secondaryWord={'취소'}
          primaryWord={'확인'}
          onClickPrimary={onClickPrimary}
          onClickSecondary={onClickSecondary}
        />
      </S.StepHandler>
      <Toast text={'2자리 이상 입력해주세요!'} isOpen={infoToastOpen} isWarn />
    </>
  );
};

export default Footer;
