'use client';

import { StepProps } from '@/types/step.type';
import { AnimalButton, Col, Text } from '@/components';
import * as S from '@/components/buttons/interstSelectButton/InterestSelectButton.style';
import { ANIMALS } from '@/constants';
import { useEffect, useState } from 'react';
import useClickButton from '@/hooks/useClickButton';

function ThirdPage({ setIsFinishPage }: StepProps) {
  const [onClickButton, buttonActiveState, isClickedButton, selectedLabel] =
    useClickButton(ANIMALS, 2);

  const [animalValue, setAnimalValue] = useState<string[]>([]);

  useEffect(() => {
    // selectedLabel;
    isClickedButton && setIsFinishPage(true);
  }, [isClickedButton, selectedLabel, setIsFinishPage]);

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
        {ANIMALS.map((label, i) => (
          <AnimalButton
            key={i}
            order={i + 1}
            label={label}
            isActive={buttonActiveState(i)}
            onClick={() => onClickButton(i)}
          />
        ))}
      </S.GridWrapper>
    </Col>
  );
}

export default ThirdPage;
