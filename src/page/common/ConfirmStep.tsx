'use client';

import { useState } from 'react';

import { Col, Footer, ResultBox, TeamStatusBox, Text } from '@/components';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  incrementStep,
  decrementStep,
  setPage,
  resetPage,
} from '@/store/feature/applyInfo';
import { PERSONAL_MAX_PAGE_ARR, GROUP_LEADER_MAX_PAGE_ARR } from '@/constants';
import { ApplyDataArr } from '@/types/apply.type';

const ConfirmStep = () => {
  const [isFinishPage, setIsFinishPage] = useState(false);

  const { curStep, meetingType } = useAppSelector(state => state.applyInfo);
  const commonState = useAppSelector(state => state.common);
  const personalState = useAppSelector(state => state.personal);
  const groupLeaderState = useAppSelector(state => state.groupLeader);
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

  const applyInfoDataArr: ApplyDataArr = (
    Object.values(commonState) as ApplyDataArr
  ).concat(Object.values(personalState).filter(data => data.type === 'info'));

  const applyPreferDataArr: ApplyDataArr = Object.values(personalState).filter(
    data => data.type === 'prefer',
  );
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
          {!isPersonal && (
            <TeamStatusBox
              teamName={'건공관 지박령'}
              type={'confirm'}
              status={'complete'}
            />
          )}
          {isPersonal ? (
            <>
              <ResultBox title={'내 정보'} applyDataArr={applyInfoDataArr} />
              <ResultBox
                title={'선호 사항'}
                applyDataArr={applyPreferDataArr}
              />
            </>
          ) : (
            <>
              <ResultBox
                title={'상대 팅에게 보여지는 정보'}
                applyDataArr={[]}
              />
              <ResultBox title={'원하는 팅의 정보'} applyDataArr={[]} />
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
