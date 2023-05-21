import { Button, Col, Paddle, Text } from '@/components';
import { StepProps } from '@/types/step.type';
import Image from 'next/image';

const ThirdPage = ({ setIsFinishPage }: StepProps) => {
  return (
    <Paddle top={32} left={24} right={24}>
      <Col align="center" gap={32}>
        <Col align="center" gap={12}>
          <Text label="Q1" font="LeferiPoint-SpecialA" color="#4C89FF" />
          <Text label="우리 팅의 분위기는..." font="LeferiBaseType-RegularA" />
        </Col>
        {/* src 채워야함 */}
        <Image width={300} height={240} alt="" src={'/몰?루'} />
        <Col gap={12}>
          <Button label="활발한 편이에요!" primary="inactive" textSize="sm" />
          <Button label="차분한 편이에요!" primary="inactive" textSize="sm" />
        </Col>
      </Col>
    </Paddle>
  );
};
export default ThirdPage;
