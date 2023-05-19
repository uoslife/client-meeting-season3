'use client';

import { Text, Button, Checkbox, Footer } from '@/components';
import Col from '@/components/layout/Col';
import Row from '@/components/layout/Row';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function Apply() {
  const router = useRouter();
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
  return (
    <>
      <Col gap={36} padding={'32px 24px'}>
        <Col gap={32}>
          <Col gap={12} align="center">
            <Text label="모임을 만드시나요? 참여하시나요?" weight={700} />
            <Col align="center">
              <Text
                label="팅을 만드는 팅장은 발급 받은 팅 코드를"
                size="sm"
                color="#656D78"
              />
              <Text
                label="팅원들에게 알려주고 팅에 대한 정보를 입력하게 됩니다."
                size="sm"
                color="#656D78"
              />
            </Col>
            <Col align="center">
              <Text
                label="그 외 이미 만들어진 팅에 참여하시는 경우,"
                size="sm"
                color="#656D78"
              />
              <Text
                label="팅장에게 전달 받은 팅 코드를 입력하면 참여 가능합니다."
                size="sm"
                color="#656D78"
              />
            </Col>
          </Col>
          <Col gap={12}>
            <Button
              primary={meetingTypeState[0].active ? 'active' : 'inactive'}
              label="팅 만들기"
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
              label="팅 참여하기"
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
      </Col>
      <Footer
        maxPage={1}
        onClickPrev={() => router.push('apply')}
        onClickNext={() => router.push('apply/group')}
      />
    </>
  );
}

export default Apply;
