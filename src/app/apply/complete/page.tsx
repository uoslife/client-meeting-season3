'use client';

import styled from 'styled-components';
import { Button, Col, Paddle, Text } from '@/components';

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
  const handleCheckInformation = () => {
    // 신청 정보 페이지 만들어지면 로직 추가할 예정
  };
  return (
    <>
      <Col fill>
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
                <Text label="05/28 일요일 저녁!" weight={600} />
                <Text label="시대생 어플로 알림을 보내드려요." />
              </Col>
              <Text label="(신청 취소 기한: 5월 27일 자정까지)" />
            </Col>
          </Col>
        </Paddle>
      </Col>
      <BottomSelectWrapper>
        <Button
          primary={'inactive'}
          onClick={handleCheckInformation}
          label={'신청 정보 확인하기'}
        />

        <a href="https://www.instagram.com/uoslife_official/" target={'_blank'}>
          <Button primary={'disabled'} label={'시대팅 안내'} />
        </a>
      </BottomSelectWrapper>
    </>
  );
};
export default FinishPage;
