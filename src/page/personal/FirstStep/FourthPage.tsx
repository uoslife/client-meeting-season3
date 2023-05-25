import { StepProps } from '@/types/step.type';
import { Col, MbtiSelectBox, Paddle, Text } from '@/components';
import { MBTI_TITLE, MBTI_QUESTIONS } from '@/constants';
import { useState } from 'react';

const FourthPage = ({ setIsFinishPage }: StepProps) => {
  const [MbtiValue, setMbtiValue] = useState<string[]>(Array(4).fill(''));
  // api로 값 보낼 땐, MbtiValue.split('')을 사용합니다.
  return (
    <Paddle top={32} left={35} right={35}>
      <Col gap={30} align={'center'}>
        <Text weight={700} label={'10. 본인의 MBTI를 선택해주세요.'} />
        <Col gap={34}>
          {MbtiValue.map((item, i) => {
            return (
              <MbtiSelectBox
                type={MBTI_QUESTIONS[i].type}
                description={MBTI_QUESTIONS[i].description}
                title={MBTI_TITLE[i]}
                setValue={setMbtiValue}
                value={MbtiValue}
                index={i}
                isPrefer={false}
                key={i}
              />
            );
          })}
        </Col>
      </Col>
    </Paddle>
  );
};

export default FourthPage;
