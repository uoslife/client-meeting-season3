'use client'
import Text from '@/components/typography/text/Text';
import Button from '@/components/buttons/button/Button';
import Image from 'next/image';
import Image3 from 'public/images/personal/my-types/3.svg';
import { StepProps } from '@/types/step.type';
import { Col} from '@/components';

const ThirdPage = ({ setIsFinishPage }: StepProps) => {
  return <>
    <Col fill={true} align={'center'}>
      <Col gap={32} align={'center'} padding='32px 24px 32px 24px'>
        <Col gap={8} align={'center'}>
          <Text
            as="p"
            color="#4C89FF"
            font="LeferiPoint-SpecialA"
            label="Q3."
            size="xl"
            weight={700}
          />

          <Text
            as="p"
            color="#3B4046"
            font="LeferiBaseType-RegularA"
            label="나는 연락 빈도가..."
            size='lg'
            weight={700}
          />
        </Col>

        <Image src={Image3} alt="" width={300} height={240} />
        <Col gap={12}>
          <Button
            height={56}
            label="시시콜콜 자주 연락하고 싶어요"
            fontSize='base'
            primary="inactive"
            width={366}
          />
          <Button
            height={56}
            label="서로 편한 시간에 연락하고 싶어요"
            fontSize='base'
            primary="inactive"
            width={366}
          />
        </Col>
      </Col>
    </Col>
  </>;
};

export default ThirdPage;