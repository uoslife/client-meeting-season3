import { StepProps } from '@/types/step.type';
import { Col, MbtiSelectBox, Paddle, Text } from '@/components';
import { MBTI_TITLE, MBTI_QUESTIONS } from '@/constants';
import { useEffect, useState } from 'react';

import { setInfoMbti } from '@/store/feature/meetingType/personalReducer';
import { useAppDispatch } from '@/store/store';

const FourthPage = ({ setIsFinishPage }: StepProps) => {
  const dispatch = useAppDispatch();

  const [mbtiValue, setMbtiValue] = useState<string[]>(Array(4).fill(''));
  // api로 값 보낼 땐, mbtiValue.split('')을 사용합니다.
  useEffect(() => {
    const isFinishMbtiSelect = !mbtiValue.includes('');
    if (isFinishMbtiSelect) {
      dispatch(setInfoMbti(mbtiValue));
      setIsFinishPage(true);
    }
  }, [dispatch, mbtiValue, setIsFinishPage]);

  return (
    <Paddle top={32} left={35} right={35}>
      <Col gap={30} align={'center'}>
        <Text weight={700} label={'10. 본인의 MBTI를 선택해주세요.'} />
        <Col gap={34}>
          {mbtiValue.map((item, i) => {
            return (
              <MbtiSelectBox
                type={MBTI_QUESTIONS[i].type}
                description={MBTI_QUESTIONS[i].description}
                title={MBTI_TITLE[i]}
                setValue={setMbtiValue}
                value={mbtiValue}
                index={i}
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
