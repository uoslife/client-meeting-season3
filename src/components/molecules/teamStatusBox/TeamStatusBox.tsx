'use client';

import * as S from './TeamStatusBox.style';

import { Checkbox, Col, IconButton, Row, Text } from '@/components';

import { GetTeamStatusResponse } from '@/api/types/meeting.type';

export type TeamStatusBoxProps = {
  teamName: string;
  type: 'apply' | 'confirm';
  statusData: GetTeamStatusResponse;
};

const MemberTextWrapper = ({
  data,
  isComplete,
}: {
  data?: { nickname: string; age: number };
  isComplete: boolean;
}) => {
  return (
    <Row justify={'space-between'} width="full">
      <Row gap={8} align={'center'}>
        <IconButton iconName="User" width={20} height={20} />
        <Text label={isComplete ? data!.nickname : ''} weight={600} />
      </Row>
      <Row gap={8} align={'center'}>
        <Text
          label={isComplete ? '입장완료' : '미입장'}
          color={isComplete ? '#34AAFF' : '#BEC4CD'}
          weight={600}
        />
        <Checkbox variant="teritary" isActive={isComplete} />
      </Row>
    </Row>
  );
};

const TeamStatusBox = ({ teamName, type, statusData }: TeamStatusBoxProps) => {
  const isApply = type === 'apply';
  const userListLength = statusData.userList.length;
  const isWaiting = userListLength !== 3;

  const remainUnCompleteWrapper = (remainLength: number) => {
    switch (remainLength) {
      case 3:
        return (
          <>
            <MemberTextWrapper isComplete={false} />
            <MemberTextWrapper isComplete={false} />
            <MemberTextWrapper isComplete={false} />
          </>
        );
      case 2:
        return (
          <>
            <MemberTextWrapper isComplete={false} />
            <MemberTextWrapper isComplete={false} />
          </>
        );
      case 1:
        return <MemberTextWrapper isComplete={false} />;
      case 0:
        return <></>;
      default:
        return <></>;
    }
  };
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
            <Text label={`${userListLength}/3`} weight={600} color="#97A1AE" />
          </Row>
        </Row>
        <S.TeamContainer>
          {statusData.userList.map((data, i) => (
            <MemberTextWrapper key={i} data={data} isComplete={true} />
          ))}
          {remainUnCompleteWrapper(3 - userListLength)}
        </S.TeamContainer>
      </Col>
    </Col>
  );
};

export default TeamStatusBox;
