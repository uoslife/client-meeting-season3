'use client';

import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Col, Paddle, Text, ProgressHeader } from '@/components';

const SquareBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 380px;
  height: 293px;
  background: #f9f9fa;
  border-radius: 16px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const BottomSelectWrapper = styled.div`
  position: fixed;
  max-width: 414px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 16px 40px;
  width: 100%;
`;

function MatchingFailed() {
  const router = useRouter();

  return (
    <>
      <ProgressHeader
        isprogress={false}
        isprogressbar={false}
        title="매칭 결과"
      />
      <Col fill>
        <Paddle top={76} right={27} left={27}>
          <Col align="center" gap={42}>
            <Col align="center">
              <Text label="매칭이 실패하였습니다." weight={800} size="xl" />
            </Col>
            <Col align="center">
              <SquareBackground>
                <Paddle top={28} bottom={90}>
                  <Col align="center" gap={24}>
                    <Text label="😢" weight={400} size="4xl" />
                    <Text
                      label={`한정된 인원으로 매칭에\n어려움이 생겼음을 알려드립니다.\n다음 시즌에 더욱 좋은 서비스로 보답하겠습니다.\n관심을 갖고 이벤트에 참여해 주셔서 감사합니다.`}
                      weight={400}
                      size="base"
                      color="#808A98"
                    />
                  </Col>
                </Paddle>
              </SquareBackground>
            </Col>
          </Col>
        </Paddle>
      </Col>
      <BottomSelectWrapper>
        <Button
          primary="active"
          textSize="sm"
          onClick={() => router.push('/')}
          label="홈 화면으로 돌아가기"
        />
      </BottomSelectWrapper>
    </>
  );
}
export default MatchingFailed;
