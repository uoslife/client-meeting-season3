'use client';

import { meetingAPI } from '@/api';
import MatchingSuccess from '@/page/result/MatchingSuccess';
import MatchingFailed from '@/page/result/MatchingFailed';
import { useEffect, useState } from 'react';
import { ApplyDataArr } from '@/types/apply.type';
import { toSuccessDataArr } from '@/utils';

type MatchingStatus = 'success' | 'failed' | 'notApplyed' | 'loading';

export type MatchingSuccessData = {
  teamType: 'SINGLE' | 'TRIPLE';
  kakaoIdArr: {
    nickname: string;
    kakaoId: string;
  }[];
  infoDataArr: ApplyDataArr;
};

const Result = () => {
  const [matchingStatus, setMatchingStatus] =
    useState<MatchingStatus>('loading');
  const [matchingSuccessData, setMatchingSuccessData] =
    useState<MatchingSuccessData>();

  const switchEvaluateSuccess = (matchingStatus: MatchingStatus) => {
    switch (matchingStatus) {
      case 'loading':
        return <>로딩중...</>;
      case 'notApplyed':
        alert('신청하지 않았습니다.');
        window.location.href = 'https://uoslife.com';
        return <></>;
      case 'success':
        return <MatchingSuccess matchingSuccessData={matchingSuccessData!} />;
      case 'failed':
        return <MatchingFailed />;
      default:
        return <></>;
    }
  };

  useEffect(() => {
    meetingAPI
      .getMatch()
      .then(data => {
        const teamType = data.data.teamType as 'SINGLE' | 'TRIPLE';
        const kakaoIdArr = data.data.teamUserList.map(data => {
          return { nickname: data.nickname, kakaoId: data.kakaoTalkId };
        });
        const newMatchingSuccessData: MatchingSuccessData = {
          teamType,
          kakaoIdArr,
          infoDataArr: toSuccessDataArr(data.data),
        };
        setMatchingSuccessData(newMatchingSuccessData);
        setMatchingStatus('success');
      })
      .catch(e => {
        console.error(e);
        if (e.response.data.code === 'M01') {
          setMatchingStatus('notApplyed');
          return;
        }
        if (e.response.data.code === 'M07') {
          setMatchingStatus('failed');
          return;
        }
      });
  }, []);

  return <>{switchEvaluateSuccess(matchingStatus)}</>;
};

export default Result;
