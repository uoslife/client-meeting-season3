'use client';

import { Button, Col, Text } from '@/components';
import { StepProps } from '@/types/step.type';
import Image from 'next/image';
import Image2 from 'public/images/personal/my-types/2.svg';

function SecondPage({ setIsFinishPage }: StepProps) {
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
            label="연인과 싸웠을 때 나는..."
            size="lg"
            weight={700}
          />
        </Col>

        <Image src={Image2} alt="" width={300} height={240} />
        <Col gap={12}>
          <Button
            height={56}
            label="그 자리에서 바로 풀어야 해요"
            textSize="sm"
            primary="inactive"
            width={366}
          />
          <Button
            height={56}
            label="시간을 두고 천천히 풀고 싶어요"
            textSize="sm"
            primary="inactive"
            width={366}
          />
        </Col>
      </Col>
    </Col>
  );
}

export default SecondPage;
