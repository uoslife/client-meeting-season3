import { Button, Col, Paddle, Text } from '@/components';
import useClickButton from '@/hooks/useClickButton';
import { StepProps } from '@/types/step.type';
import Image from 'next/image';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setInfoQuestionGroup } from '@/store/feature/meetingType/groupReducer';

const SecondPage = ({ setIsFinishPage }: StepProps) => {
  const dispatch = useAppDispatch();
  const { info_question } = useAppSelector(state => state.group);
  const buttonLabelArr = ['활발한 편이에요!', '차분한 편이에요!'];
  const [onClickButton, buttonActiveState, isClickedButton, selectedLabel] =
    useClickButton(buttonLabelArr, 1, info_question);

  useEffect(() => {
    if (isClickedButton) {
      dispatch(
        setInfoQuestionGroup(
          { label: selectedLabel[0].label, order: 0 } ?? {
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
          <Text label="Q1" font="LeferiPoint-SpecialA" color="#4C89FF" />
          <Text label="우리 팅의 분위기는..." font="LeferiBaseType-RegularA" />
        </Col>
        <Image
          width={360}
          height={200}
          alt=""
          src={'/images/illust/group/1.jpg'}
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
export default SecondPage;
