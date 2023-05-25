'use client';

import { StepProps } from '@/types/step.type';
import { Col, Paddle, Row, Text, TextRoundInput } from '@/components';
import useInput from '@/hooks/useInput';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setInfoName } from '@/store/feature/meetingType/groupReducer';

const FirstPage = ({ setIsFinishPage }: StepProps) => {
  const [nameValue, handleNameValue] = useInput('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (nameValue !== '') {
      setIsFinishPage(true);
      dispatch(setInfoName(nameValue ?? ''));
    } else setIsFinishPage(false);
  }, [nameValue, setIsFinishPage]);

  return (
    <Paddle top={32} left={24} right={24}>
      <Col gap={32}>
        <Col gap={16} align={'center'}>
          <Text label="우리 팅의 이름을 정해주세요." weight={700} />
          <Text
            label={
              '지금부터 입력하는 정보는 상대 팅에게 공개됩니다. \n 욕설 및 비하 단어는 삼가해 주세요'
            }
            size="sm"
            color="#656D78"
          />
        </Col>
        <Row gap={8} width="full">
          <TextRoundInput
            placeholder={'팅 이름 입력(2글자 이상)'}
            value={nameValue}
            onChange={handleNameValue}
          ></TextRoundInput>
        </Row>
      </Col>
    </Paddle>
  );
};

export default FirstPage;
