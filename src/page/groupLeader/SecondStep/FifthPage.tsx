import { Button, Col, Paddle, Text } from '@/components';
import { StepProps } from '@/types/step.type';
import Image from 'next/image';

const FifthPage = ({ setIsFinishPage }: StepProps) => {
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
          <Button label="조금만 마실래요!" primary="inactive" textSize="sm" />
          <Button label="적당히 마실래요!" primary="inactive" textSize="sm" />
          <Button label="마시고 죽을래요!" primary="inactive" textSize="sm" />
        </Col>
      </Col>
    </Paddle>
  );
};
export default FifthPage;
