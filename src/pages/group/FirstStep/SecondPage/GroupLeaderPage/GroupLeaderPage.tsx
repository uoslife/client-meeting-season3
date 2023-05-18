import { CheckCircle, Col, IconButton, Paddle, Row, Text } from '@/components';
import * as S from './GroupLeaderPage.style';
import { useState } from 'react';
const GroupLeaderPage = () => {
  const [curNum, setCurNum] = useState(0);
  const [teamName, setTeamName] = useState('"건공관 지박령"');
  const [code, setCode] = useState(8250);
  return (
    <Col fill padding={'24px'}>
      <Col align={'center'} gap={24}>
        <Paddle top={20}>
          <S.Code>{code}</S.Code>
          <Col align={'center'} gap={12}>
            <Text
              label="팅 코드를 팅원에게 공유해주세요."
              size="xl"
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
        <Col gap={16} align={'center'}>
          <Text label="팅 이름" size="sm" color="#656D78" />
          <Text label={teamName} weight={800} size="xl" />
        </Col>
        <Col gap={8}>
          <Row justify={'space-between'} align={'center'}>
            <Paddle left={20}>
              <Row align={'center'}>
                <S.Loader />
                <Text label="팅 결성 대기중" weight={600} color="#808A98" />
              </Row>
            </Paddle>
            <Paddle right={20}>
              <div>
                <Row gap={4}>
                  <IconButton iconName="Person" width={13} height={13} />
                  <Text label={`${curNum}/3`} weight={600} color="#808A98" />
                </Row>
              </div>
            </Paddle>
          </Row>
          <S.TeamContainer>
            <Row justify={'space-between'}>
              <div>
                <Row gap={8} align={'center'}>
                  <IconButton iconName="User" width={20} height={20} />
                  <Text label="호랑이 (본인)" weight={600} />
                </Row>
              </div>
              <div>
                <Row gap={8} align={'center'}>
                  <Text label="입장완료" weight={600} />
                  <CheckCircle isActive={true} />
                </Row>
              </div>
            </Row>
          </S.TeamContainer>
        </Col>
      </Col>
    </Col>
  );
};

export default GroupLeaderPage;
