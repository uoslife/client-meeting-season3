'use client';

import { meetingAPI } from '@/api';
import { Text, Button, Checkbox, Footer } from '@/components';
import Col from '@/components/layout/Col';
import useClickButton from '@/hooks/useClickButton';
import { setMeetingType } from '@/store/feature/applyInfo';
import { useAppDispatch } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function Apply() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const groupTypeArr = ['팅 만들기', '팅 참여하기'];
  const [
    onClickGroupTypeButton,
    groupTypeButtonActiveState,
    isClickedGroupType,
    groupType,
  ] = useClickButton(groupTypeArr, 1);

  const [isFinishPage, setIsFinishPage] = useState(false);

  useEffect(() => {
    if (isClickedGroupType) setIsFinishPage(true);
    else setIsFinishPage(false);
  }, [isClickedGroupType]);

  const onClickPrev = () => {
    router.push('apply');
  };

  const onClickNext = () => {
    switch (groupType[0].label) {
      case groupTypeArr[0]:
        dispatch(setMeetingType('groupLeader'));
        router.push('apply/groupLeader');
        return;
      case groupTypeArr[1]:
        dispatch(setMeetingType('groupMember'));
        router.push('apply/groupMember');
        return;
      default:
        return;
    }
  };

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
            {groupTypeArr.map((label, i) => (
              <Button
                key={i}
                label={label}
                primary={groupTypeButtonActiveState(i) ? 'active' : 'inactive'}
                textSize="base"
                onClick={() => onClickGroupTypeButton(i)}
              />
            ))}
          </Col>
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
