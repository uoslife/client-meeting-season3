import { StepProps } from '@/types/step.type';
import { Col, MbtiSelectBox, Paddle, Text } from '@/components';
import { MBTI_TITLE, MBTI_QUESTIONS } from '@/constants';
import { useEffect, useState } from 'react';
import { colors } from '@/styles/styles';

import { setPreferMbti } from '@/store/feature/meetingType/personalReducer';
import { useAppDispatch } from '@/store/store';

type MbtiType = {
  type: string;
  order: number;
};

const FourthPage = ({ setIsFinishPage }: StepProps) => {
  const dispatch = useAppDispatch();
  const [MbtiValue, setMbtiValue] = useState<MbtiType[]>([
    { type: '', order: 0 },
  ]);
  useEffect(() => {
    // const isFinishMbtiSelect = !MbtiValue.includes('');
    // if (isFinishMbtiSelect) {
    //   dispatch(setPreferMbti(MbtiValue));
    //   setIsFinishPage(true);
    // }
    console.log(MbtiValue);
  }, [dispatch, MbtiValue, setIsFinishPage]);

  useEffect(() => {
    if (MbtiValue.length > 3) setIsFinishPage(true);
  }, [MbtiValue]);

  // api로 값 보낼 땐, MbtiValue.split('')을 사용합니다.
  return (
    <Col padding={'32px 35px'} gap={36}>
      <Col gap={12} align={'center'}>
        <Text
          weight={700}
          font={'LeferiBaseType-RegularA'}
          label={'10. 선호하는 상대의 MBTI를 선택해주세요.'}
        />
        <Text
          color={colors.Secondary700}
          size={'sm'}
          label={
            '특정 MBTI를 선택하는 것이 아닌 선호하는 유형을 \n 모두 선택해주세요. (ex. S, N 중복 선택 가능)'
          }
        />
      </Col>
      <Col gap={34}>
        {Array(4)
          .fill('')
          .map((item, i) => {
            return (
              <MbtiSelectBox
                type={MBTI_QUESTIONS[i].type}
                description={MBTI_QUESTIONS[i].description}
                title={MBTI_TITLE[i]}
                setValue={setMbtiValue}
                value={MbtiValue}
                index={i}
                key={i}
                isPrefer={true}
              />
            );
          })}
      </Col>
    </Col>
  );
};

export default FourthPage;
