'use client';

import { BottomSheet, Col, Footer, Paddle, Text } from '@/components';
import * as S from '@/styles/pages/GroupMemberPage.style';
import { StepProps } from '@/types/step.type';
import { useEffect, useRef, useState } from 'react';

const GroupMemberFirstPage = ({ setIsFinishPage }: StepProps) => {
  const [code, setCode] = useState<(string | number)[]>();
  const [statusResult, setStatusResult] = useState<boolean>();
  const [isModal, setIsModal] = useState(false);
  const [statusMessage, setStatusMessage] = useState();
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const input = inputRef.current;
    !!input && input.focus();
  }, [inputRef]);

  useEffect(() => {
    if (code?.length === 4) setIsModal(true); // code가 맞는지 api 로직 추가
  }, [code]);
  const handleInputValue = (e: any) => {
    setCode(e.target.value);
  };
  const onClickSecondary = () => {
    const input = inputRef.current;
    setIsModal(false);
    setCode([]);
    !!input && input.focus();
  };

  return (
    <>
      <Col fill padding={'32px'} gap={54} align={'center'}>
        <Col align={'center'} gap={10}>
          <Text label="팅을 만든 친구가 있나요?" weight={700} />
          <Text label="공유받은 코드를 입력해주세요. 😎" weight={700} />
        </Col>
        <S.Container>
          <S.Code active={!!code && code.length === 1}>{code?.[0]}</S.Code>
          <S.Code active={!!code && code.length === 2}>{code?.[1]}</S.Code>
          <S.Code active={!!code && code.length === 3}>{code?.[2]}</S.Code>
          <S.Code active={!!code && code.length === 4}>{code?.[3]}</S.Code>
          <S.Input
            type="text"
            maxLength={4}
            ref={inputRef}
            value={code}
            onChange={handleInputValue}
          />
        </S.Container>
        {!!statusMessage && (
          <Text
            label={statusMessage}
            weight={600}
            color={statusResult ? '#2F80ED' : '#FD6666'}
          />
        )}
        <BottomSheet
          isActive={isModal}
          title={'시립대의 등대 조형관'}
          subTitle={'팅 이름'}
          current={1}
          description={'팅에 참여하시겠습니까?'}
          secondaryWord={'취소'}
          primaryWord={'참여'}
          onClickSecondary={onClickSecondary}
        />
      </Col>
    </>
  );
};

export default GroupMemberFirstPage;
