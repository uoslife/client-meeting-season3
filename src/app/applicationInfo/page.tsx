'use client';

import { meetingAPI } from '@/api';
import {
  Button,
  Col,
  ProgressHeader,
  ResultBox,
  TeamStatusBox,
  Text,
} from '@/components';
import { useRouter } from 'next/navigation';

const ApplicationInfo = () => {
  // single인지triple인지 구분 필요
  meetingAPI
    .getTeamInfo({ teamType: 'SINGLE' })
    .then()
    .catch(() => console.log('hi'));

  const router = useRouter();
  const onClickCancleApply = () => {
    meetingAPI
      .deleteTeam({ teamType: 'SINGLE', isTeamLeader: true })
      .then(() => {
        alert('신청 취소되었습니다.');
        router.push('/');
      })
      .catch(() => {});
  };

  return (
    <>
      <ProgressHeader
        isprogress={false}
        isprogressbar={false}
        title="신청 정보"
      />
      <Col padding="32px 24px 12px" gap={85}>
        <Col gap={12} padding="24px 0 0 0">
          <TeamStatusBox
            teamName="건공관 지박령"
            type="confirm"
            status="waiting"
          />
          <ResultBox title={'내 정보'} applyDataArr={[]} />
          <ResultBox title={'선호 사항'} applyDataArr={[]} />
        </Col>
        <Col gap={10}>
          <Col align={'center'}>
            <Text
              label="참여에 문제가 생기셨나요? 기한 내에 신청 취소를 눌러주세요."
              weight={400}
              size="sm"
              color="#656D78"
            />
            <Text
              label="(신청 취소 기한 : 5월 28일 오후 10시까지)"
              weight={400}
              size="sm"
              color="#656D78"
            />
          </Col>
          <Button
            primary={'disabled'}
            textSize="sm"
            onClick={onClickCancleApply}
            label={'신청 취소하기'}
          />
        </Col>
      </Col>
    </>
  );
};
export default ApplicationInfo;
