'use client';

import { Button, Col, Text } from '@/components';
import { StepProps } from '@/types/step.type';
import Image from 'next/image';
import Image3 from 'public/images/personal/my-types/3.svg';

function ThirdPage({ setIsFinishPage }: StepProps) {
  return (
    <Col fill align="center">
      <Col gap={32} align="center" padding="32px 24px 32px 24px">
        <Col gap={8} align="center">
          <Text
            as="p"
            color="#4C89FF"
            font="LeferiPoint-SpecialA"
            label="Q1."
            size="xl"
            weight={700}
          />

          <Text
            as="p"
            color="#3B4046"
            font="LeferiBaseType-RegularA"
            label="나는 연락 빈도가..."
            size="lg"
            weight={700}
          />
        </Col>

        <Image src={Image3} alt="" width={300} height={240} />
        <Col gap={12}>
          <Button
            height={56}
            label="시시콜콜 자주 연락하고 싶어요"
            textSize="sm"
            primary="inactive"
            width={366}
          />
          <Button
            height={56}
            label="서로 편한 시간에 연락하고 싶어요"
            textSize="sm"
            primary="inactive"
            width={366}
          />
        </Col>
      </Col>
    </Col>
  );
}

export default ThirdPage;
