'use client'
import Text from '@/components/typography/text/Text';
import Button from '@/components/buttons/button/Button';
import Image from 'next/image';
import Image4 from 'public/images/personal/my-types/4.svg';
import { StepProps } from '@/types/step.type';
import { Col} from '@/components';

const FourthPage = ({ setIsFinishPage }: StepProps) => {
  return <>
    <Col fill={true} align={'center'}>
      <Col gap={32} align={'center'} padding='32px 24px 32px 24px'>
        <Col gap={8} align={'center'}>
          <Text
            as="p"
            color="#4C89FF"
            font="LeferiPoint-SpecialA"
            label="Q4."
            size="xl"
            weight={700}
          />

          <Text
            as="p"
            color="#3B4046"
            font="LeferiBaseType-RegularA"
            label="연인과의 만남에 있어..."
            size='lg'
            weight={700}
          />
        </Col>

        <Image src={Image4} alt="" width={300} height={240} />
        <Col gap={12}>
          <Button
            height={56}
            label="혼자만의 휴식 시간도 필요해요"
            fontSize='base'
            primary="inactive"
            width={366}
          />
          <Button
            height={56}
            label="시간 날 때마다 함께 있고 싶어요"
            fontSize='base'
            primary="inactive"
            width={366}
          />
        </Col>
      </Col>
    </Col>
  </>;
};

export default FourthPage;
