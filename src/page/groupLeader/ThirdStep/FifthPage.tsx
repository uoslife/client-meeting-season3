import { Button, Col, Paddle, Text } from '@/components';
import useClickButton from '@/hooks/useClickButton';
import { StepProps } from '@/types/step.type';
import Image from 'next/image';
import { useEffect } from 'react';
import { useAppDispatch } from '@/store/store';
import { setInfoQuestionGroup } from '@/store/feature/meetingType/groupReducer';

const FifthPage = ({ setIsFinishPage }: StepProps) => {
  const dispatch = useAppDispatch();
  const buttonLabelArr = [
    '친구를 만들고 싶어요!',
    '연인을 만들고 싶어요!',
    '상관 없어요!',
  ];
  const [onClickButton, buttonActiveState, isClickedButton, selectedLabel] =
    useClickButton(buttonLabelArr, 1);

  useEffect(() => {
    if (isClickedButton) {
      dispatch(
        setInfoQuestionGroup(
          { label: selectedLabel[0].label, order: 3 } ?? {
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
          <Text label="Q4" font="LeferiPoint-SpecialA" color="#4C89FF" />
          <Text
            label="우리 팅의 미팅 목적은..."
            font="LeferiBaseType-RegularA"
          />
        </Col>
        <Image
          width={360}
          height={276}
          alt=""
          src={'/images/illust/group/4.jpg'}
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
export default FifthPage;
