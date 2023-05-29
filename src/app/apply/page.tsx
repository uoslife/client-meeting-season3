'use client';

import { meetingAPI } from '@/api';
import { Text, Button, Checkbox, Footer, Toast } from '@/components';
import Col from '@/components/layout/Col';
import Row from '@/components/layout/Row';
import useClickButton from '@/hooks/useClickButton';
import { setMeetingType } from '@/store/feature/applyInfo';
import { useAppDispatch } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function Apply() {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const [checkboxState, setCheckboxState] = useState([false, false]);

  const meetingTypeArr = ['1:1 미팅', '3:3 미팅'];
  const [
    onClickMeetingTypeButton,
    meetingTypeButtonActiveState,
    isClickedMeetingType,
    meetingType,
  ] = useClickButton(meetingTypeArr, 1);

  const [isFinishPage, setIsFinishPage] = useState(false);

  useEffect(() => {
    if (isClickedMeetingType) setIsFinishPage(true);
    else setIsFinishPage(false);
  }, [isClickedMeetingType]);

  const onClickPrev = () => router.push('/');

  const onClickNext = () => {
    switch (meetingType[0].label) {
      case meetingTypeArr[0]:
        dispatch(setMeetingType('personal'));
        meetingAPI
          .createTeam({ teamType: 'SINGLE', isTeamLeader: true })
          .then(() => router.push('apply/personal'))
          .catch(e => {
            if (e.response.status === 400) {
              alert('이미 신청하였습니다.');
              router.push('/');
            }
          });
        return;
      case meetingTypeArr[1]:
        dispatch(setMeetingType('group'));
        router.push('/apply/branching');
        return;
      default:
        return;
    }
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleCheckButtonClick = async () => {
    setModalOpen(true);
    setTimeout(() => {
      setModalOpen(false);
    }, 5000);
  };

  //const handleTypeClick = (i: number) => () => {
  //  setMeetingTypeState(() => {
  //    const newState = meetingTypeInitState;
  //    newState[i].active = true;
  //    return newState;
  //  });
  //  setModal(true);
  //};

  // useEffect(() => {
  //  if (
  //    !meetingTypeState.find(data => data.active) ||
  //    checkboxState.includes(false)
  //  )
  //    setIsFinishPage(false);
  //  else setIsFinishPage(true);
  //}, [meetingTypeState, checkboxState]);

  return (
    <>
      <Col gap={36} padding={'32px 24px'}>
        <Col gap={32}>
          <Col gap={12} align="center">
            <Text
              label="참여하고자 하는 미팅 종류를 선택해주세요."
              weight={700}
            />
            <Col align="center">
              <Text
                label="서울시립대학교 구성원만 신청 가능하며"
                size="sm"
                color="#656D78"
              />
              <Text
                label="3:3 미팅의 경우 함께 나갈 인원을 모아야 신청이 가능합니다."
                size="sm"
                color="#656D78"
              />
            </Col>
          </Col>
          <Col gap={12}>
            {meetingTypeArr.map((label, i) => (
              <Button
                key={i}
                label={label}
                primary={
                  meetingTypeButtonActiveState(i) ? 'active' : 'inactive'
                }
                textSize="base"
                onClick={() => onClickMeetingTypeButton(i)}
              />
            ))}
          </Col>
        </Col>
        <Col gap={8}>
          <Row
            gap={8}
            align="center"
            onClick={() => {
              setCheckboxState(prev => [!prev[0], prev[1]]);
              handleCheckButtonClick();
            }}
          >
            <Checkbox variant="primary" isActive={checkboxState[0]} />
            <Text
              label="개인정보 활용 정보 제공에 동의합니다"
              size="sm"
              color="#3B4046"
              style={{ cursor: 'pointer' }}
            />
          </Row>
          <Row
            gap={8}
            align="center"
            onClick={() => setCheckboxState(prev => [prev[0], !prev[1]])}
          >
            <Checkbox variant="primary" isActive={checkboxState[1]} />
            <Text
              label="학생증 인증이 완료된 시대생 유저만 참여할 수 있습니다."
              size="sm"
              hightlight="학생증 인증이 완료된 시대생 유저"
              color="#3B4046"
              style={{ cursor: 'pointer' }}
            />
          </Row>
        </Col>
      </Col>
      <Footer
        maxPage={1}
        disabled={!isFinishPage}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />
      <Toast
        text={'미팅 종류를 선택하시면 바꾸실 수 없습니다'}
        isOpen={modalOpen}
      />
    </>
  );
}

export default Apply;
