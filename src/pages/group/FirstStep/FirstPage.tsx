import { StepProps } from '@/types/step.type';
import { Col, Paddle, Text } from '@/components';

const FirstPage = ({ setIsFinishPage }: StepProps) => {
  const label =
    '지금부터 입력하는 정보는 상대 팅에게 공개됩니다. \n 욕설 및 비하 단어는 삼가해 주세요';
  return (
    <Col fill align={'center'}>
      <Paddle top={32}>
        <Col gap={16}>
          <Text label="우리 팅의 이름을 정해주세요." weight={700} />
          <Text label={label} size="sm" color="#656D78" />
        </Col>
      </Paddle>
    </Col>
  );
};

export default FirstPage;
