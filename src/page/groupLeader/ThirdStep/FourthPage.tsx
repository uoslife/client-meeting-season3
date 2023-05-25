import { useEffect } from 'react';

import { Button, Col, Paddle, Text } from '@/components';
import useClickButton from '@/hooks/useClickButton';
import { StepProps } from '@/types/step.type';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setInfoQuestionGroup } from '@/store/feature/meetingType/groupReducer';

const FourthPage = ({ setIsFinishPage }: StepProps) => {
  const dispatch = useAppDispatch();
  const { info_question } = useAppSelector(state => state.group);
  const buttonLabelArr = [
    '조금만 마실래요!',
    '적당히 마실래요!',
    '마시고 죽을래요!',
  ];
  const [onClickButton, buttonActiveState, isClickedButton, selectedLabel] =
    useClickButton(buttonLabelArr, 1, info_question);

  useEffect(() => {
    if (isClickedButton) {
      dispatch(
        setInfoQuestionGroup(
          { label: selectedLabel[0].label, order: 2 } ?? {
            label: '',
            order: 0,
          },
        ),
      );
      setIsFinishPage(true);
    } else setIsFinishPage(false);
  }, [isClickedButton, selectedLabel, setIsFinishPage]);

  return (
    <Paddle top={32} left={24} right={24}>
      <Col align="center" gap={32}>
        <Col align="center" gap={12}>
          <Text label="Q3" font="LeferiPoint-SpecialA" color="#4C89FF" />
          <Text label="우리 팅의 주량은..." font="LeferiBaseType-RegularA" />
        </Col>
        <Image
          width={360}
          height={230}
          alt=""
          src={'/images/illust/group/3.jpg'}
        />
        <Col gap={12}>
          {buttonLabelArr.map((label, i) => (
            <Button
              key={i}
              label={label}
              primary={buttonActiveState(i) ? 'active' : 'inactive'}
              textSize="sm"
              onClick={() => onClickButton(i)}
            />
          ))}
        </Col>
      </Col>
    </Paddle>
  );
};
export default FourthPage;
