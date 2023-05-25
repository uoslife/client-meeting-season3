import { useEffect } from 'react';
import Image from 'next/image';

import { Button, Col, Paddle, Text } from '@/components';

import useClickButton from '@/hooks/useClickButton';

import { StepProps } from '@/types/step.type';
import { useAppDispatch } from '@/store/store';
import { setInfoQuestionGroup } from '@/store/feature/meetingType/groupReducer';

const ThirdPage = ({ setIsFinishPage }: StepProps) => {
  const dispatch = useAppDispatch();
  const buttonLabelArr = [
    '다 같이 술게임을 하고 싶어요!',
    '술게임보단 대화를 많이 나누고 싶어요!',
  ];
  const [onClickButton, buttonActiveState, isClickedButton, selectedLabel] =
    useClickButton(buttonLabelArr, 1);

  useEffect(() => {
    if (isClickedButton) {
      dispatch(
        setInfoQuestionGroup(
          { label: selectedLabel[0].label, order: 1 } ?? {
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
          <Text label="Q2" font="LeferiPoint-SpecialA" color="#4C89FF" />
          <Text label="우리 팅은 미팅에서..." font="LeferiBaseType-RegularA" />
        </Col>
        <Image
          width={360}
          height={212}
          alt=""
          src={'/images/illust/group/2.jpg'}
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
export default ThirdPage;
