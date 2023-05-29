'use client';

import { StepProps } from '@/types/step.type';
import {
  BottomSheet,
  Button,
  CheckCircle,
  Col,
  IconButton,
  Paddle,
  Row,
  TeamStatusBox,
  Text,
} from '@/components';
import * as S from '@/styles/pages/GroupLeaderPage.style';

import { GetTeamStatusResponse } from '@/api/types/meeting.type';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { meetingAPI } from '@/api';
import { useEffect, useState } from 'react';
import { resetAll } from '@/store/feature/applyInfo';
import { useRouter } from 'next/navigation';
import { resetAllCommonState } from '@/store/feature/common/commonReducer';
import { resetAllGroupState } from '@/store/feature/meetingType/groupReducer';
import { resetAllPersonalState } from '@/store/feature/meetingType/personalReducer';

const SecondPage = ({ setIsFinishPage }: StepProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { info_name } = useAppSelector(state => state.group);
  const { code } = useAppSelector(state => state.group);
  const [statusData, setStatusData] = useState<GetTeamStatusResponse>({
    teamName: '',
    userList: [],
  });

  const getTeamStatus = () => {
    meetingAPI.getTeamStatus({ teamType: 'TRIPLE', code }).then(data => {
      setStatusData(data.data);
      if (data.data.userList.length === 3) setIsFinishPage(true);
      else setIsFinishPage(false);
    });
  };

  useEffect(() => {
    getTeamStatus();
  }, []);

  const [isModal, setIsModal] = useState(false);

  const onClickCancleApply = () => {
    setIsModal(true);
  };
  const onClickPrimary = () => {
    meetingAPI
      .deleteTeam({ teamType: 'TRIPLE', isTeamLeader: true })
      .then(() => {
        dispatch(resetAll());
        dispatch(resetAllCommonState());
        dispatch(resetAllPersonalState());
        dispatch(resetAllGroupState());
        alert('신청 취소되었습니다.');
        router.push('/');
      })
      .catch(() => {
        alert('팀 신청 후 요청해주세요');
      });
  };
  const onClickSecondary = () => {
    setIsModal(false);
  };

  return (
    <Col fill gap={56} padding={'24px 0 130px 0'}>
      <Col align={'center'} gap={24}>
        <Paddle top={20}>
          <S.Code>{code}</S.Code>
          <Col align={'center'} gap={12}>
            <Text
              label="팅 코드를 팅원에게 공유해주세요."
              size="xl"
              weight={600}
              color="#656D78"
            />
            <Text
              label="유효시간 내에 모든 인원이 입장을 완료해야 합니다."
              color="#656D78"
              weight={600}
            />
          </Col>
        </Paddle>
        <Text
          label={
            '팅 결성 전에 페이지를 떠나거나 코드를 재발급하는 경우, \n 생성 중인 팅이 자동으로 삭제됩니다.'
          }
          size="xs"
          color="#656D78"
        />
        <S.Divider />
        <TeamStatusBox
          teamName={info_name.data}
          type={'apply'}
          statusData={statusData}
        />
      </Col>
      <Button
        primary={'disabled'}
        textSize="sm"
        onClick={onClickCancleApply}
        label={'신청 취소하기'}
      />
      <BottomSheet
        isActive={isModal}
        subTitle="신청 취소 하시겠습니까?"
        secondaryWord={'취소'}
        primaryWord={'확인'}
        onClickPrimary={onClickPrimary}
        onClickSecondary={onClickSecondary}
      />
    </Col>
  );
};

export default SecondPage;
