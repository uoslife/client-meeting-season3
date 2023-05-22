import { Button, Col, Paddle, Text } from '@/components';
import { StepProps } from '@/types/step.type';
import Image from 'next/image';

const FourthPage = ({ setIsFinishPage }: StepProps) => {
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
          <Button
            label="다 같이 술게임을 하고 싶어요!"
            primary="inactive"
            textSize="sm"
          />
          <Button
            label="술게임보단 대화를 많이 나누고 싶어요!"
            primary="inactive"
            textSize="sm"
          />
        </Col>
      </Col>
    </Paddle>
  );
};
export default FourthPage;
