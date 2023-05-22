'use client';

import { Button, Col, Text } from '@/components';
import { StepProps } from '@/types/step.type';
import Image from 'next/image';
import Image4 from 'public/images/illust/personal/4.jpg';

function FourthPage({ setIsFinishPage }: StepProps) {
  return (
    <Col fill align="center">
      <Col gap={32} align="center" padding="32px 24px 32px 24px">
        <Col gap={8} align="center">
          <Text
            as="p"
            color="#4C89FF"
            font="LeferiBaseType-RegularA"
            label="Q4."
            size="xl"
            weight={800}
          />

          <Text
            as="p"
            color="#3B4046"
            font="LeferiBaseType-RegularA"
            label="연인과의 만남에 있어..."
            size="lg"
            weight={700}
          />
        </Col>

        <Image src={Image4} alt="" width={360} height={254} />
        <Col gap={12}>
          <Button
            height={56}
            label="혼자만의 휴식 시간도 필요해요"
            textSize="sm"
            primary="inactive"
            width={366}
          />
          <Button
            height={56}
            label="시간 날 때마다 함께 있고 싶어요"
            textSize="sm"
            primary="inactive"
            width={366}
          />
        </Col>
      </Col>
    </Col>
  );
}

export default FourthPage;
