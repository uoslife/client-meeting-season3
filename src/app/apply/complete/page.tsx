'use client';

import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';
import { Button, Col, Paddle, Text } from '@/components';
import { useEffect, useRef } from 'react';
import congratulation from '@/assets/lottie/congratulation.json';
import { useRouter } from 'next/navigation';
import { colors } from '@/styles/styles';

const BottomSelectWrapper = styled.div`
  position: fixed;
  max-width: 414px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 26px;
  width: 100%;
`;

const FinishPage = () => {
  const router = useRouter();
  const playerRef = useRef(Player);

  const handleCheckInformation = () => {
    router.push('/applicationInfo');
  };

  useEffect(() => {
    router.prefetch('/applicationInfo');
  }, []);

  return (
    <>
      <Col fill>
        <Player
          src={congratulation}
          autoplay={true}
          Ref={playerRef}
          speed={0.5}
          style={{
            height: '100vh',
            position: 'absolute',
            top: '-255px',
          }}
        />
        <Paddle top={60}>
          <Col gap={30}>
            <Col align={'center'}>
              <Text label="🎉신청이 완료되었습니다." weight={800} size={'lg'} />
              <Text
                label="매칭 결과가 나오면 알려드릴게요!"
                weight={800}
                size={'lg'}
              />
            </Col>

            <Col align={'center'} gap={8}>
              <Col align={'center'}>
                <Text label="06/01 목요일 저녁!" weight={600} />
                <Text label="시대생 어플로 알림을 보내드려요." />
              </Col>
              <Text
                color={colors.Primary_500}
                size={'xs'}
                label="(신청 취소 기한: 5월 31일 오후 10시까지)"
              />
            </Col>
          </Col>
        </Paddle>
      </Col>
      <BottomSelectWrapper>
        <Button
          primary={'inactive'}
          textSize="sm"
          onClick={handleCheckInformation}
          label={'신청 정보 확인하기'}
        />
      </BottomSelectWrapper>
    </>
  );
};
export default FinishPage;
