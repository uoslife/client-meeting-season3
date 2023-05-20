'use client'
import Text from '@/components/typography/text/Text';
import Button from '@/components/buttons/button/Button';
import Image from 'next/image';
import Image1 from 'public/images/personal/my-types/1.svg';
import { StepProps } from '@/types/step.type';
import { Col} from '@/components';

const FirstPage = ({ setIsFinishPage }: StepProps) => {
  return (
    <Col fill={true} align={'center'}>
      <Col gap={32} align={'center'} padding='32px 24px 32px 24px'>
        <Col gap={8} align={'center'}>
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
            label="나는 이런 연애가 하고 싶어요!"
            size='lg'
            weight={700}
          />
        </Col>

        <Image src={Image1} alt="" width={300} height={240} />
        <Col gap={12}>
          <Button
            height={56}
            label="친구처럼 편한 연애"
            fontSize='base'
            primary="inactive"
            width={366}
          />
          <Button
            height={56}
            label="달달하고 늘 두근대는 연애"
            fontSize='base'
            primary="inactive"
            width={366}
          />
        </Col>
      </Col>
    </Col>
  );
};

export default FirstPage;
