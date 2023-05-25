import { StepProps } from '@/types/step.type';
import { Col, InterestSelectButton, Text } from '@/components';
import * as S from '@/components/buttons/interstSelectButton/InterestSelectButton.style';
import { INTERESTS } from '@/constants';
import { useEffect, useState } from 'react';
import useClickButton from '@/hooks/useClickButton';
import { useAppDispatch } from '@/store/store';
import { setInfoInterests } from '@/store/feature/meetingType/personalReducer';

const FifthPage = ({ setIsFinishPage }: StepProps) => {
  // const [interestValue, setInterestValue] = useState<string[]>([]);
  // const handleSelectInterest = (value: string) => () => {
  //   const deleteInterestState = interestValue.filter(item => item != value);

  //   if (interestValue.length < 3 && !interestValue.includes(value))
  //     return setInterestValue([...interestValue, value]);
  //   setInterestValue(deleteInterestState);
  // };
  // const handleIsFinishPage = () => {
  //   if (interestValue.length === 3) setIsFinishPage(true);
  // };

  const dispatch = useAppDispatch();

  const [onClickButton, buttonActiveState, isClickedButton, selectedLabel] =
    useClickButton(INTERESTS, 3);

  useEffect(() => {
    const interestsArr = selectedLabel.map(item => item.label);
    if (isClickedButton) dispatch(setInfoInterests(interestsArr));
    else dispatch(setInfoInterests(['']));

    selectedLabel.length === 3 ? setIsFinishPage(true) : setIsFinishPage(false);
  }, [dispatch, isClickedButton, selectedLabel, setIsFinishPage]);

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
