import { Button, Col, Paddle, Text, TextRoundInput } from '@/components';
import DropdownInput from '@/components/input/droptdownInput/DropdownInput';
import { StepProps } from '@/types/step.type';

const FirstPage = ({ setIsFinishPage }: StepProps) => {
  return (
    <Paddle top={32} left={24} right={24}>
      <Col gap={32} align={'center'}>
        <Col gap={12} align={'center'}>
          <Text label={'1. 팅원들의 성별은 무엇인가요?'} weight={700} />
          <Text
            label={'모든 팅원들이 같은 성별이어야 참여 가능합니다.'}
            size="sm"
            color="#656D78"
          />
        </Col>
        <Col gap={12} align={'center'}>
          <Button label="남자" primary="inactive" />
          <Button label="여자" primary="inactive" />
        </Col>
        <Text label={'2. 팅원들의 평균 나이를 선택해주세요.'} weight={700} />

        <DropdownInput label="평균 나이 선택" />
      </Col>
    </Paddle>
  );
};
export default FirstPage;
