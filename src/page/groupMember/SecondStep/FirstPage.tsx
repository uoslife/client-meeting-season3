'use client';

import { meetingAPI } from '@/api';
import { BottomSheet, Col, Text } from '@/components';
import { incrementStep, setPage } from '@/store/feature/applyInfo';
import { useAppDispatch } from '@/store/store';
import * as S from '@/styles/pages/GroupMemberPage.style';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const GroupMemberFirstPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [code, setCode] = useState<string>('');
  const [isStatusExist, setIsStatusExist] = useState<boolean>(false);
  const [isModal, setIsModal] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [teamData, setTeamData] = useState({ teamName: '', applyUserCount: 0 });

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const input = inputRef.current;
    !!input && input.focus();
  }, [inputRef]);

  useEffect(() => {
    if (code?.length === 4) {
      meetingAPI
        .enterTeam({ teamType: 'TRIPLE', code: code, isJoin: false })
        .then(data => {
          setStatusMessage('유효한 코드입니다');
          setIsStatusExist(true);
          setIsModal(true);
          setTeamData(prev => {
            return {
              ...prev,
              teamName: data.data!.teamName,
              applyUserCount: data.data!.userList.length,
            };
          });
        })
        .catch(e => {
          if (e.response.data.code === 'M02') {
            alert('이미 팀이 존재합니다');
            // router.push('/');
            return;
          }
          if (e.response.data.code === 'M17') {
            setStatusMessage('같은 성별끼리만 참여가 가능합니다.');
            setIsStatusExist(false);
            setIsModal(false);
            return;
          }
          setStatusMessage('존재하지 않는 팀 코드입니다');
          setIsStatusExist(false);
          setIsModal(false);
        });
    } // code가 맞는지 api 로직 추가
  }, [code]);
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatusMessage('');
    const inputValue = e.target.value;
    setCode(inputValue.toUpperCase());
  };

  const onClickPrimary = () => {
    meetingAPI
      .enterTeam({
        teamType: 'TRIPLE',
        code: code,
        isJoin: true,
      })
      .then(() => {
        dispatch(setPage(1));
        dispatch(incrementStep());
      })
      .catch(e => {
        console.log(e);
      });
  };
  const onClickSecondary = () => {
    const input = inputRef.current;
    setIsModal(false);
    setCode('');
    !!input && input.focus();
  };

  return (
    <>
      <Col fill padding={'32px'} gap={54} align={'center'}>
        <Col align={'center'} gap={10}>
          <Text label="팅을 만든 친구가 있나요?" weight={700} />
          <Text label="공유받은 코드를 입력해주세요. 😎" weight={700} />
        </Col>
        <Col gap={16} align={'center'}>
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
              color={isStatusExist ? '#34AAFF' : '#FD6666'}
            />
          )}
        </Col>
        <BottomSheet
          isActive={isModal}
          title={teamData.teamName}
          subTitle={'팅 이름'}
          current={teamData.applyUserCount}
          description={'팅에 참여하시겠습니까?'}
          secondaryWord={'취소'}
          primaryWord={'참여'}
          onClickPrimary={onClickPrimary}
          onClickSecondary={onClickSecondary}
        />
      </Col>
    </>
  );
};

export default GroupMemberFirstPage;
