'use client';

import { meetingAPI } from '@/api';
import {
  GetTeamInfoResponse,
  GetTeamStatusResponse,
  TeamType,
} from '@/api/types/meeting.type';
import {
  BottomSheet,
  Button,
  Col,
  ProgressHeader,
  ResultBox,
  TeamStatusBox,
  Text,
  Toast,
} from '@/components';
import { resetAll } from '@/store/feature/applyInfo';
import { resetAllCommonState } from '@/store/feature/common/commonReducer';
import { resetAllGroupState } from '@/store/feature/meetingType/groupReducer';
import { resetAllPersonalState } from '@/store/feature/meetingType/personalReducer';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { ApplyDataArr } from '@/types/apply.type';
import { ToDataArrType, toDataArr, toTeamStatus } from '@/utils';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ApplicationInfo = () => {
  const dispatch = useAppDispatch();
  const { code } = useAppSelector(state => state.group);
  const router = useRouter();

  // single인지triple인지 구분 필요!!
  const [teamInfo, setTeamInfo] = useState<GetTeamInfoResponse>();
  const [teamStatus, setTeamStatus] = useState<GetTeamStatusResponse>();
  const [teamType, setTeamType] = useState<TeamType>();

  const [infoDataArr, setInfoDataArr] = useState<ApplyDataArr>();
  const [preferDataArr, setPreferDataArr] = useState<ApplyDataArr>();

  const [isTeamMember, setIsTeamMember] = useState(false);
  // const [errorState, setErrorState] = useState([false, false]);
  const getTeamInfo = () => {
    meetingAPI
      .getTeamInfo({ teamType: 'SINGLE' })
      .then(data => {
        // setTeamInfo(data.data);
        setTeamType(data.data.teamType);
        const infoPrefer = {
          informationDistance: data.data.informationDistance,
          informationFilter: data.data.informationFilter,
          preferenceDistance: data.data.preferenceDistance,
          preferenceFilter: data.data.preferenceFilter,
        };
        const todataArr: ToDataArrType = {
          infoPrefer,
          sex: data.data.sex,
          teamUserList: data.data.teamUserList,
        };
        setInfoDataArr(toDataArr(todataArr, 'personal', 'info'));
        setPreferDataArr(toDataArr(todataArr, 'personal', 'prefer'));
      })
      .catch(e => {
        console.error(e);
        // alert('팀 신청을 먼저 해주세요!');
        // router.push('/');
      });
    meetingAPI
      .getTeamInfo({ teamType: 'TRIPLE' })
      .then(data => {
        // setTeamInfo(data.data);
        setTeamType(data.data.teamType);
        setTeamStatus(toTeamStatus(data.data));
        const infoPrefer = {
          informationDistance: data.data.informationDistance,
          informationFilter: data.data.informationFilter,
          preferenceDistance: data.data.preferenceDistance,
          preferenceFilter: data.data.preferenceFilter,
        };
        const todataArr: ToDataArrType = {
          infoPrefer,
          sex: data.data.sex,
          teamUserList: data.data.teamUserList,
        };
        setInfoDataArr(toDataArr(todataArr, 'group', 'info'));
        setPreferDataArr(toDataArr(todataArr, 'group', 'prefer'));
        meetingAPI
          .getUser()
          .then(d =>
            setIsTeamMember(
              d.data.nickname !== data.data.teamUserList[0].nickname,
            ),
          );
      })
      .catch(e => {
        console.error(e);
        // alert('팀 신청을 먼저 해주세요!');
        // router.push('/');
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
      .deleteTeam({ teamType: teamType!, isTeamLeader: true })
      .then(() => {
        dispatch(resetAll());
        dispatch(resetAllCommonState());
        dispatch(resetAllPersonalState());
        dispatch(resetAllGroupState());
        meetingAPI.deleteUser();
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
      <Col
        padding={isTeamMember ? '32px 24px 12px' : '32px 24px 60px'}
        gap={85}
      >
        <Col gap={12} padding="24px 0 0 0">
          {!!teamStatus && (
            <TeamStatusBox
              teamName={teamStatus.teamName}
              type="confirm"
              statusData={teamStatus!}
            />
          )}
          {teamType === 'SINGLE' ? (
            <>
              <ResultBox title={'내 정보'} applyDataArr={infoDataArr!} />
              <ResultBox title={'선호 사항'} applyDataArr={preferDataArr!} />
            </>
          ) : (
            <>
              <ResultBox
                title={'상대 팅에게 보여지는 정보'}
                applyDataArr={infoDataArr!}
              />
              <ResultBox
                title={'원하는 팅의 정보'}
                applyDataArr={preferDataArr!}
              />
            </>
          )}
        </Col>
        {/* {!isTeamMember && (
          <Col gap={10}>
            <Col align={'center'}>
              <Text
                label="참여에 문제가 생기셨나요? 기한 내에 신청 취소를 눌러주세요."
                weight={400}
                size="sm"
                color="#656D78"
              />
              <Text
                label="(신청 취소 기한 : 6월 1일 오후 2시까지)"
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
        )} */}

        {/* 매칭중 안내 팝업 삭제 */}
        {/* <Toast
          text={
            <p style={{ lineHeight: '1.4' }}>
              매칭이 이뤄지고 있어요😊
              <br />
              오늘 밤에 만나요!
            </p>
          }
          isOpen={true}
          autoClose={6000}
        /> */}
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
