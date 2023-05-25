import { StepProps } from '@/types/step.type';
import { Col, InterestSelectButton, Text } from '@/components';
import * as S from '@/components/buttons/interstSelectButton/InterestSelectButton.style';
import { INTERESTS } from '@/constants';
import { useEffect, useState } from 'react';

const FifthPage = ({ setIsFinishPage }: StepProps) => {
  const [interestValue, setInterestValue] = useState<string[]>([]);
  const handleSelectInterest = (value: string) => () => {
    const deleteInterestState = interestValue.filter(item => item != value);

    if (interestValue.length < 3 && !interestValue.includes(value))
      return setInterestValue([...interestValue, value]);

    setInterestValue(deleteInterestState);
  };

  const handleIsFinishPage = () => {
    if (interestValue.length === 3) setIsFinishPage(true);
  };

  useEffect(() => {
    handleIsFinishPage();
  }, [interestValue]);

  return (
    <Col gap={32} padding={'32px 24px'}>
      <Col align={'center'}>
        <Text
          label={'11. 본인의 관심사를 3가지 선택해주세요.'}
          color={'#3B4046'}
          weight={700}
        />
      </Col>
      <S.GridWrapper>
        {INTERESTS.map((item, i) => {
          return (
            <InterestSelectButton
              key={i}
              isActive={interestValue.includes(item)}
              order={i + 1}
              label={INTERESTS[i]}
              onClick={handleSelectInterest(item)}
            />
          );
        })}
      </S.GridWrapper>
    </Col>
  );
};

export default FifthPage;
