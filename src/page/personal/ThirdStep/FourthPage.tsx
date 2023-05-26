import { StepProps } from '@/types/step.type';
import { Col, MbtiSelectBox, Paddle, Text } from '@/components';
import { MBTI_TITLE, MBTI_QUESTIONS } from '@/constants';
import { useEffect, useState } from 'react';
import { colors } from '@/styles/styles';

import { setPreferMbti } from '@/store/feature/meetingType/personalReducer';
import { useAppDispatch, useAppSelector } from '@/store/store';

const FourthPage = ({ setIsFinishPage }: StepProps) => {
  const dispatch = useAppDispatch();
  const { prefer_mbti } = useAppSelector(state => state.personal);

  const [mbtiValue, setMbtiValue] = useState<string[]>(
    prefer_mbti.data[0] === '' ? [] : prefer_mbti.data,
  );
  useEffect(() => {
    if (mbtiValue.length > 3) {
      dispatch(setPreferMbti(mbtiValue));
      setIsFinishPage(true);
    }
  }, [dispatch, mbtiValue, setIsFinishPage]);

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
