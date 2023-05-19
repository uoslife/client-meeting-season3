'use client';

import { Button, Col, ResultBox, TeamStatusBox, Text } from '@/components';

const ConfirmPage = () => {
  const onClickCancleApply = () => {
    // 신청 취소 API 작성 시 추가
  };

  return (
    <>
      <Col padding="24px" gap={85}>
        <Col gap={12}>
          <TeamStatusBox
            teamName="건공관 지박령"
            type="confirm"
            status="waiting"
          />
          <ResultBox title={'내 정보'} applyDataArr={[]} />
          <ResultBox title={'선호 사항'} applyDataArr={[]} />
        </Col>
        <Col gap={10}>
          <Col align={'center'}>
            <Text
              label="참여에 문제가 생기셨나요? 기한 내에 신청 취소를 눌러주세요."
              weight={400}
              size="sm"
              color="#656D78"
            />
            <Text
              label="(신청 취소 기한 : 5월 27일 자정까지)"
              weight={400}
              size="sm"
              color="#656D78"
            />
          </Col>
          <Button
            primary={'disabled'}
            textSize="sm"
            onClick={onClickCancleApply}
            label={'신청 취소하기'}
          />
        </Col>
      </Col>
    </>
  );
};
export default ConfirmPage;
