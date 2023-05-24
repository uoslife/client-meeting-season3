'use client';

import { StepProps } from '@/types/step.type';
import { AnimalButton, Col, Text } from '@/components';
import * as S from '@/components/buttons/interstSelectButton/InterestSelectButton.style';
import { ANIMALS } from '@/constants';
import { useEffect, useState } from 'react';

function ThirdPage({ setIsFinishPage }: StepProps) {
  const [animalValue, setAnimalValue] = useState<string[]>([]);
  const handleSelectInterest = (value: string) => () => {
    const deleteInterestState = animalValue.filter(item => item != value);

    if (!animalValue.includes(value))
      return setAnimalValue([...animalValue, value]);
    setAnimalValue(deleteInterestState);
  };
  const handleIsFinishPage = () => {
    if (animalValue.length > 1) setIsFinishPage(true);
  };

  useEffect(() => {
    handleIsFinishPage();
  }, [animalValue]);

  return (
    <Col gap={44} padding={'32px 24px'}>
      <Col align={'center'} gap={12}>
        <Text
          label={'8. 본인과 닮은 동물상을 선택해주세요.'}
          color={'#3B4046'}
          weight={700}
        />
        <Text
          label={'최대 2개까지 선택이 가능합니다.'}
          size={'sm'}
          color={'#656D78'}
        />
      </Col>
      <S.GridWrapper>
        {ANIMALS.map((item, i) => {
          return (
            <AnimalButton
              key={i}
              isActive={animalValue.includes(item)}
              order={i + 1}
              label={ANIMALS[i]}
              onClick={handleSelectInterest(item)}
            />
          );
        })}
      </S.GridWrapper>
    </Col>
  );
}

export default ThirdPage;
