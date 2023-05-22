import { useEffect } from 'react';

import { Button, Col, Paddle, Text } from '@/components';
import useClickButton from '@/hooks/useClickButton';
import { StepProps } from '@/types/step.type';
import Image from 'next/image';

const FourthPage = ({ setIsFinishPage }: StepProps) => {
  const buttonLabelArr = [
    '조금만 마실래요!',
    '적당히 마실래요!',
    '마시고 죽을래요!',
  ];
  const { onClickButton, buttonActiveState, isClickedButton, selectedLabel } =
    useClickButton(buttonLabelArr);

  useEffect(() => {
    if (isClickedButton) {
      // selectedLabel 사용한 전역 저장 로직
      setIsFinishPage(true);
    }
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
