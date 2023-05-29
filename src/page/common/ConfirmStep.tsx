'use client';

import { useEffect, useState } from 'react';

import { Col, Footer, ResultBox, TeamStatusBox, Text } from '@/components';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  incrementStep,
  decrementStep,
  setPage,
  resetPage,
} from '@/store/feature/applyInfo';
import {
  PERSONAL_MAX_PAGE_ARR,
  GROUP_LEADER_MAX_PAGE_ARR,
  GROUP_QUESTIONS,
  PERSONAL_QUESTIONS,
} from '@/constants';
import { ApplyDataArr } from '@/types/apply.type';

import { infoToBinary } from '@/utils/binary/informationToBinary';
import { meetingAPI } from '@/api';
import { GetTeamStatusResponse } from '@/api/types/meeting.type';

const ConfirmStep = () => {
  const [isFinishPage, setIsFinishPage] = useState(false);

  const { curStep, meetingType } = useAppSelector(state => state.applyInfo);
  const commonState = useAppSelector(state => state.common);
  const personalState = useAppSelector(state => state.personal);
  const groupState = useAppSelector(state => state.group);
  const dispatch = useAppDispatch();

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
  //   '',
  //   '',
  //   '',
  //   '',
  // );

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

  const applyInfoPersonalDataArr: ApplyDataArr = (
    Object.values(commonState) as ApplyDataArr
  ).concat(Object.values(personalState).filter(data => data.type === 'info'));

  const applyPreferPersonalDataArr: ApplyDataArr = Object.values(
    personalState,
  ).filter(data => data.type === 'prefer');

  const applyInfoGroupDataArr: ApplyDataArr = (
    Object.values(commonState) as ApplyDataArr
  ).concat(Object.values(groupState).filter(data => data.type === 'info'));

  const applyPreferGroupDataArr: ApplyDataArr = Object.values(
    groupState,
  ).filter(data => data.type === 'prefer');

  // get Group Status
  const [teamStatus, setTeamStatus] = useState<GetTeamStatusResponse>();
  const getTeamStatus = () => {
    meetingAPI
      .getTeamStatus({ teamType: 'TRIPLE', code: groupState.code })
      .then(data => {
        setTeamStatus(data.data);
      })
      .catch(e => console.error(e));
  };
  useEffect(() => {
    console.log(applyInfoGroupDataArr);
    console.log(applyPreferGroupDataArr);
    if (!isPersonal) getTeamStatus();
  }, []);

  return (
    <Col padding={'40px 16px 120px'}>
      <Col gap={40}>
        <Col align={'center'} gap={8}>
          <Text
            label="📌 신청 정보를 확인해주세요!"
            size="xl"
            color="#3B4046"
            weight={800}
          />
          <Text
            label="신청 완료 후에는 수정이 불가합니다."
            size="sm"
            color="#656D78"
          />
        </Col>
        <Col gap={12}>
          {!!teamStatus && (
            <TeamStatusBox
              teamName={groupState.info_name.data}
              type={'confirm'}
              statusData={teamStatus!}
            />
          )}
          {isPersonal ? (
            <>
              <ResultBox
                title={'내 정보'}
                applyDataArr={applyInfoPersonalDataArr}
              />
              <ResultBox
                title={'선호 사항'}
                applyDataArr={applyPreferPersonalDataArr}
              />
            </>
          ) : (
            <>
              <ResultBox
                title={'상대 팅에게 보여지는 정보'}
                applyDataArr={applyInfoGroupDataArr}
              />
              <ResultBox
                title={'원하는 팅의 정보'}
                applyDataArr={applyPreferGroupDataArr}
              />
            </>
          )}
        </Col>
      </Col>
      <Footer
        maxPage={1}
        disabled={isFinishPage}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />
    </Col>
  );
};

export default ConfirmStep;
