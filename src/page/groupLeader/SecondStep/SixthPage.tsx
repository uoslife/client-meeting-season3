import { Button, Col, Paddle, Text } from '@/components';
import { StepProps } from '@/types/step.type';
import Image from 'next/image';

const SixthPage = ({ setIsFinishPage }: StepProps) => {
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
        {/* src 채워야함 */}
        <Image width={300} height={240} alt="" src={'/몰?루'} />
        <Col gap={12}>
          <Button
            label="친구를 만들고 싶어요!"
            primary="inactive"
            textSize="sm"
          />
          <Button
            label="연인을 만들고 싶어요!"
            primary="inactive"
            textSize="sm"
          />
          <Button label="상관 없어요!" primary="inactive" textSize="sm" />
        </Col>
      </Col>
    </Paddle>
  );
};
export default SixthPage;
