'use client';

import { StepProps } from '@/types/step.type';
import {
    Col,
    Paddle,
    RoundedRectangleButton,
    Row,
    Text,
    TextRoundInput,
} from '@/components';
import { useState } from 'react';
import useInput from '@/hooks/useInput';

const FirstPage = ({ setIsFinishPage }: StepProps) => {
    const [nameStatus, setNameStatus] = useState<'success' | 'error' | 'default'>(
        'default',
    );
    const [statusValue, setStatusValue] = useState('');
    const [nameValue, handleNameValue] = useInput('');
    const handleName = () => {
        setNameStatus('error');
        setStatusValue('이미 있는 이름입니다.');
    };
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
                        status={nameStatus}
                        statusMessage={statusValue}
                        value={nameValue}
                        onChange={handleNameValue}
                    ></TextRoundInput>
                    <RoundedRectangleButton
                        type={'skyBlue'}
                        label={'중복확인'}
                        height={48}
                        onClick={handleName}
                    />
                </Row>
            </Col>
        </Paddle>
    );
};

export default FirstPage;
