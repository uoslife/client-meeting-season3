'use client';

import {
  Button,
  Col,
  Paddle,
  RoundedRectangleButton,
  Row,
  Text,
  TextRoundInput,
} from '@/components';
import { DropdownInput } from '@/components';
import { StepProps } from '@/types/step.type';

const FirstPage = ({ setIsFinishPage }: StepProps) => {
  // const [nameStatus, setNameStatus] = useState<'success' | 'error' | 'default'>(
  //   'default',
  // );
  // const [statusValue, setStatusValue] = useState('');
  // const [nameValue, handleNameValue] = useInput('');
  // // 초기화 필요 setIsFinishPage(false);
  // const onClickDoubleCheckButton = () => {
  //   setNameStatus('error');
  //   setStatusValue('이미 있는 이름입니다.');
  //   setIsFinishPage(true);
  // };
  return (
    // footer와 겹침 문제: bottom에 padding 임시방편
    <Paddle top={32} left={24} right={24} bottom={300}>
      <Col gap={32} align="center">
        <Col gap={12} align="center">
          <Text
            label={'본인의 닉네임을 정해주세요.'}
            weight={700}
            font="LeferiBaseType-RegularA"
          />
          <Text
            label={
              '지금부터 입력하는 정보는 매칭된 상대에게 공개됩니다. \n욕설 및 비하 단어는 삼가 주세요.'
            }
            weight={400}
            size="sm"
            color="#2E74FF"
          />
        </Col>
        <Row gap={8} width="full">
          {/* placeholder 설정 필요 */}
          <TextRoundInput
            placeholder={''}
            value={''}
            onChange={() => {}}
            onClick={() => {}}
          />
          {/* font-size가 분명 16으로 되어있기는 한데 피그마랑 미묘하게 다른느낌.. */}
          <RoundedRectangleButton label="중복확인" height={48} type="skyBlue" />
        </Row>
        <Text
          label={'1. 본인의 성별을 선택해주세요.'}
          weight={700}
          font="LeferiBaseType-RegularA"
        />
        <Col gap={12}>
          <Button label="남자" primary="active" textSize="base" />
          <Button label="여자" primary="inactive" textSize="base" />
        </Col>
        <Text
          label={'2. 본인의 나이를 선택해주세요.'}
          weight={700}
          font="LeferiBaseType-RegularA"
        />
        <DropdownInput label="나이 선택" />
        <Text
          label={'3. 본인의 키를 선택해주세요.'}
          weight={700}
          font="LeferiBaseType-RegularA"
        />
        <DropdownInput label="키 선택" />
      </Col>
    </Paddle>
  );
};

export default FirstPage;
