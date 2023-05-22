'use client';

import { Button, Col, Text } from '@/components';
import { StepProps } from '@/types/step.type';
import Image from 'next/image';
import Image1 from 'public/images/illust/personal/1.jpg';

function FirstPage({ setIsFinishPage }: StepProps) {
  return (
    <Col fill align="center">
      <Col gap={32} align="center" padding="32px 24px 32px 24px">
        <Col gap={8} align="center">
          <Text
            as="p"
            color="#4C89FF"
            font="LeferiBaseType-RegularA"
            label="Q1."
            size="xl"
            weight={800}
          />

          <Text
            as="p"
            color="#3B4046"
            font="LeferiBaseType-RegularA"
            label="나는 이런 연애가 하고 싶어요!"
            size="lg"
            weight={700}
          />
        </Col>

        <Image src={Image1} alt="" width={360} height={218} />
        <Col gap={12}>
          <Button
            height={56}
            label="친구처럼 편한 연애"
            textSize="sm"
            primary="inactive"
            width={366}
          />
          <Button
            height={56}
            label="달달하고 늘 두근대는 연애"
            textSize="sm"
            primary="inactive"
            width={366}
          />
        </Col>
      </Col>
    </Col>
  );
}

export default FirstPage;
