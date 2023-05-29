'use client';

import { StepProps } from '@/types/step.type';
import {
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

import { useAppSelector } from '@/store/store';
import { meetingAPI } from '@/api';
import { useEffect, useState } from 'react';

const SecondPage = ({ setIsFinishPage }: StepProps) => {
  const { info_name } = useAppSelector(state => state.group);
  const { code } = useAppSelector(state => state.group);
  const [statusData, setStatusData] = useState<GetTeamStatusResponse>({
    teamName: '',
    userList: [],
  });
  setIsFinishPage(true);

  const getTeamStatus = () => {
    meetingAPI
      .getTeamStatus({ teamType: 'TRIPLE', code })
      .then(data => setStatusData(data.data));
  };

  useEffect(() => {
    getTeamStatus();
  }, []);

  return (
    <Col fill padding={'24px 0 140px 0'}>
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
    </Col>
  );
};

export default SecondPage;
