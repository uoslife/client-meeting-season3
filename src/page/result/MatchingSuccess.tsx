'use client';

import { meetingAPI } from '@/api';
import { MatchingSuccessData } from '@/app/result/page';
import {
  Banner,
  Button,
  Col,
  ProgressHeader,
  ResultBox,
  TeamResultBox,
  Text,
} from '@/components';
import { BANNER_AD_URL } from '@/constants';
import { useEffect, useState } from 'react';

const MatchingSuccess = ({
  matchingSuccessData,
}: {
  matchingSuccessData: MatchingSuccessData;
}) => {
  const isTeamSingle = matchingSuccessData.teamType === 'SINGLE';
  const onClickGuide = () => {
    /** 가이드 페이지로 이동 */
    window.location.href =
      'https://uoslife.com/board/free/1b9d751e-362d-43f6-b540-86781b7e5f81';
  };
  const [username, setUsername] = useState('');
  const getUser = () =>
    meetingAPI.getUser().then(data => {
      setUsername(data.data.nickname);
    });
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <ProgressHeader
        isprogress={false}
        isprogressbar={false}
        title="매칭 결과"
      />
      <Col padding="24px" gap={24}>
        <Col gap={32}>
          <Col align={'center'} gap={8}>
            <Text
              label={`🎉${username} 님,\n 성공적으로 매칭되었어요!`}
              size="xl"
              color="#3B4046"
              weight={800}
            />
            <Text
              label="상대와의 카톡방을 만들어 대화를 시작해보세요."
              weight={400}
              size={'sm'}
              color="#656D78"
            />
          </Col>
          <Col gap={24}>
            <TeamResultBox kakaoIdArr={matchingSuccessData.kakaoIdArr} />
            {isTeamSingle ? (
              <ResultBox
                title={'상대의 정보'}
                applyDataArr={matchingSuccessData.infoDataArr}
              />
            ) : (
              <ResultBox
                title={'상대 팅의 정보'}
                applyDataArr={matchingSuccessData.infoDataArr}
              />
            )}
          </Col>
        </Col>
        <Col gap={12}>
          <Banner
            link={'MmedAdvertise.jpg'}
            url={BANNER_AD_URL.Mmed}
            style={{ width: '100%' }}
            isTransition={true}
          />
          <Col gap={10}>
            <Button
              primary={'active'}
              textSize="sm"
              onClick={onClickGuide}
              label={'시대팅 안내 사항 보러가기'}
            />
          </Col>
        </Col>
      </Col>
    </>
  );
};
export default MatchingSuccess;
