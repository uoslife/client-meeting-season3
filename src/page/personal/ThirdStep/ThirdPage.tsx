'use client';

import { StepProps } from '@/types/step.type';
import { AnimalButton, Col, Text } from '@/components';
import * as S from '@/components/buttons/interstSelectButton/InterestSelectButton.style';
import { ANIMALS } from '@/constants';
import { useEffect, useState } from 'react';
import useClickButton from '@/hooks/useClickButton';
import { setPreferAnimal } from '@/store/feature/meetingType/personalReducer';
import { useAppDispatch } from '@/store/store';
import { useAppSelector } from '@/store/hooks';

function ThirdPage({ setIsFinishPage }: StepProps) {
  const dispatch = useAppDispatch();
  const { prefer_animal } = useAppSelector(state => state.personal);
  const [onClickButton, buttonActiveState, isClickedButton, selectedLabel] =
    useClickButton(ANIMALS, 9, prefer_animal);

  useEffect(() => {
    isClickedButton ? setIsFinishPage(true) : setIsFinishPage(false);
  }, [isClickedButton, selectedLabel, setIsFinishPage]);

  useEffect(() => {
    const animalArr = selectedLabel.map(item => item.label);
    if (isClickedButton) dispatch(setPreferAnimal(animalArr));
    else dispatch(setPreferAnimal(['']));

    isClickedButton ? setIsFinishPage(true) : setIsFinishPage(false);
  }, [dispatch, isClickedButton, selectedLabel, setIsFinishPage]);

  return (
    <Col gap={44} padding={'32px 24px'}>
      <Col align={'center'} gap={12}>
        <Text
          label={'8. 선호하는 상대의 동물상을 선택해주세요.'}
          color={'#3B4046'}
          weight={700}
        />
        <Text
          label={'개수 상관없이 복수 선택이 가능합니다.'}
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
