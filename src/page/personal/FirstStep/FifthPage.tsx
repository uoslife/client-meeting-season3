import { StepProps } from '@/types/step.type';
import { Col, InterestSelectButton, Text } from '@/components';
import * as S from '@/components/buttons/interstSelectButton/InterestSelectButton.style';
import { INTERESTS } from '@/constants';
import { useEffect, useState } from 'react';
import useClickButton from '@/hooks/useClickButton';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setInfoInterests } from '@/store/feature/meetingType/personalReducer';

const FifthPage = ({ setIsFinishPage }: StepProps) => {
  const dispatch = useAppDispatch();
  const { info_interests } = useAppSelector(state => state.personal);

  const [onClickButton, buttonActiveState, isClickedButton, selectedLabel] =
    useClickButton(INTERESTS, 3, info_interests);

  useEffect(() => {
    const interestsArr = selectedLabel.map(item => item.label);
    if (isClickedButton) dispatch(setInfoInterests(interestsArr ?? ['']));

    selectedLabel.length === 3 ? setIsFinishPage(true) : setIsFinishPage(false);
  }, [dispatch, isClickedButton, selectedLabel, setIsFinishPage]);

  return (
    <Col gap={32} padding={'32px 24px'}>
      <Col align={'center'}>
        <Text
          label={'10. 본인의 관심사를 3가지 선택해주세요.'}
          color={'#3B4046'}
          weight={700}
        />
      </Col>
      <S.GridWrapper>
        {INTERESTS.map((label, i) => (
          <InterestSelectButton
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
};

export default FifthPage;
