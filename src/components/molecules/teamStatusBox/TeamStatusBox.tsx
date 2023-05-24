'use client';

import * as S from './TeamStatusBox.style';

import { Checkbox, Col, IconButton, Row, Text } from '@/components';

export type TeamStatusBoxProps = {
  teamName: string;
  type: 'apply' | 'confirm';
  status: 'waiting' | 'complete';
};

const MemberTextWrapper = () => {
  return (
    <Row justify={'space-between'} width="full">
      <Row gap={8} align={'center'}>
        <IconButton iconName="User" width={20} height={20} />
        <Text label="호랑이 (본인)" weight={600} />
      </Row>
      <Row gap={8} align={'center'}>
        <Text label="입장완료" color={'#34AAFF'} weight={600} />
        <Checkbox variant="teritary" isActive={true} />
      </Row>
    </Row>
  );
};

const TeamStatusBox = ({ teamName, type, status }: TeamStatusBoxProps) => {
  const isApply = type === 'apply';
  const isWaiting = status === 'waiting';

  return (
    <Col gap={24}>
      <Col gap={8} align="center">
        <Text
          label={isApply ? '팅 이름' : '우리 팅 정보'}
          weight={400}
          size="sm"
          color="#808A98"
        />
        <Text label={`“${teamName}”`} weight={800} size="xl" color="#656D78" />
      </Col>
      <Col gap={8}>
        <Row
          justify={'space-between'}
          align={'center'}
          padding={'0 20px'}
          width="full"
        >
          <Row align={'center'}>
            {isWaiting && <S.Loader />}
            <Text
              label={isWaiting ? '팅 결성 대기중' : '팅 결성이 완료되었습니다'}
              weight={600}
              size="base"
              color={isWaiting ? '#808A98' : '#34AAFF'}
            />
          </Row>
          <Row gap={4} align="center" style={{ width: '' }}>
            <IconButton iconName="Person" width={13} height={13} />
            <Text label={`1/3`} weight={600} color="#97A1AE" />
          </Row>
        </Row>
        <S.TeamContainer>
          <MemberTextWrapper />
          <MemberTextWrapper />
          <MemberTextWrapper />
        </S.TeamContainer>
      </Col>
    </Col>
  );
};

export default TeamStatusBox;
