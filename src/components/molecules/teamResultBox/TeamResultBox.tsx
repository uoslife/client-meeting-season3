'use client';

import * as S from './TeamResultBox.style';

import { Checkbox, Col, IconButton, Row, Text } from '@/components';

export type TeamResultBoxProps = {
  teamName: string;
  type: 'apply' | 'confirm';
  status: 'waiting' | 'complete';
};

const handleCopyKakaoId = () => {
};
const MemberTextWrapper = () => {
  return (
    <Row justify={'space-between'} width="full">
      <Row gap={8} align={'center'}>
        <IconButton iconName="User" width={20} height={20} />
        <Text label="호랑이" weight={600} />
      </Row>
      <Row gap={8} align={'center'}>
        <Text label="kakaotalkId" color={'#34AAFF'} weight={600} />
        <S.CopyButton onClick={handleCopyKakaoId}>복사</S.CopyButton>
      </Row>
    </Row>
  );
};

const TeamResultBox = ({ teamName, type, status }: TeamResultBoxProps) => {
  const isApply = type === 'apply';
  const isWaiting = status === 'waiting';

  return (
    <Col gap={24}>
      <Col gap={8}>
        <S.TeamContainer>
          <Row self-align='left' width="full">
            <Text label={"💙 상대의 카카오톡 ID"} weight={600}/>
          </Row>
          <MemberTextWrapper />
          <MemberTextWrapper />
          <MemberTextWrapper />
        </S.TeamContainer>
      </Col>
    </Col>
  );
};

export default TeamResultBox;
