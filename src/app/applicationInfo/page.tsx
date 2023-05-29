'use client';

import { meetingAPI } from '@/api';
import { GetTeamInfoResponse, TeamType } from '@/api/types/meeting.type';
import {
  BottomSheet,
  Button,
  Col,
  ProgressHeader,
  ResultBox,
  TeamStatusBox,
  Text,
} from '@/components';
import { resetAll } from '@/store/feature/applyInfo';
import { resetAllCommonState } from '@/store/feature/common/commonReducer';
import { resetAllGroupState } from '@/store/feature/meetingType/groupReducer';
import { resetAllPersonalState } from '@/store/feature/meetingType/personalReducer';
import { useAppDispatch } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ApplicationInfo = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // single인지triple인지 구분 필요!!
  const [teamInfo, setTeamInfo] = useState<GetTeamInfoResponse>();
  const [teamType, setTeamType] = useState<TeamType | ''>('');
  const getTeamInfo = () => {
    meetingAPI
      .getTeamInfo({ teamType: 'SINGLE' })
      .then(data => {
        setTeamInfo(data.data);
        const teamTypeInTeamInfo =
          data.data.teamUserList.length === 1 ? 'SINGLE' : 'TRIPLE';
        setTeamType(teamTypeInTeamInfo);
      })
      .catch(e => {
        console.error(e);
        alert('팀 신청을 먼저 해주세요!');
        router.push('/');
      });
  };

  useEffect(() => {
    getTeamInfo();
  }, []);

  const [isModal, setIsModal] = useState(false);

  const onClickCancleApply = () => {
    setIsModal(true);
  };
  const onClickPrimary = () => {
    meetingAPI
      .deleteTeam({ teamType: teamType as TeamType, isTeamLeader: true })
      .then(() => {
        dispatch(resetAll());
        dispatch(resetAllCommonState());
        dispatch(resetAllPersonalState());
        dispatch(resetAllGroupState());
        alert('신청 취소되었습니다.');
        router.push('/');
      })
      .catch(() => {
        alert('팀 신청 후 요청해주세요');
      });
  };
  const onClickSecondary = () => {
    setIsModal(false);
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
          {/* <TeamStatusBox
            teamName="건공관 지박령"
            type="confirm"
            status="waiting"
          /> */}
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
        <BottomSheet
          isActive={isModal}
          subTitle="신청 취소 하시겠습니까?"
          secondaryWord={'취소'}
          primaryWord={'확인'}
          onClickPrimary={onClickPrimary}
          onClickSecondary={onClickSecondary}
        />
      </Col>
    </>
  );
};

export default ApplicationInfo;
