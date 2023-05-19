'use client';

import { Text, Button, Checkbox, Footer } from '@/components';
import Col from '@/components/layout/Col';
import Row from '@/components/layout/Row';
import { setMeetingType } from '@/store/feature/applyInfo';
import { useAppDispatch } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function Apply() {
  const dispatch = useAppDispatch();
  const meetingTypeInitState = [
    {
      name: 'personal',
      active: false,
    },
    {
      name: 'group',
      active: false,
    },
  ];
  const [meetingTypeState, setMeetingTypeState] =
    useState(meetingTypeInitState);

  const [checkboxState, setCheckboxState] = useState([false, false]);
  const [isFinishPage, setIsFinishPage] = useState(false);
  const router = useRouter();

  const onClickPrev = () => router.push('/');
  const onClickNext = () => {
    if (meetingTypeState.find(data => data.active)!.name === 'group') {
      dispatch(setMeetingType('group'));
      router.push('/apply/branching');
    } else {
      dispatch(setMeetingType('personal'));
      router.push('apply/personal');
    }
  };

  useEffect(() => {
    if (
      !meetingTypeState.find(data => data.active) ||
      checkboxState.includes(false)
    )
      setIsFinishPage(false);
    else setIsFinishPage(true);
  }, [meetingTypeState, checkboxState]);

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
            <Button
              primary={meetingTypeState[0].active ? 'active' : 'inactive'}
              label="1:1 미팅"
              fontSize={'base'}
              onClick={() =>
                setMeetingTypeState(() => {
                  const newState = meetingTypeInitState;
                  newState[0].active = true;
                  return newState;
                })
              }
            />
            <Button
              primary={meetingTypeState[1].active ? 'active' : 'inactive'}
              label="3:3 미팅"
              fontSize={'base'}
              onClick={() =>
                setMeetingTypeState(() => {
                  const newState = meetingTypeInitState;
                  newState[1].active = true;
                  return newState;
                })
              }
            />
          </Col>
        </Col>
        <Col gap={8}>
          <Row
            gap={8}
            align="center"
            onClick={() => setCheckboxState(prev => [!prev[0], prev[1]])}
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
    </>
  );
}

export default Apply;
