'use client';

import { MatchingSuccessData } from '@/app/result/page';
import {
  Button,
  Col,
  ProgressHeader,
  ResultBox,
  TeamResultBox,
  Text,
} from '@/components';

const MatchingSuccess = ({
  matchingSuccessData,
}: {
  matchingSuccessData: MatchingSuccessData;
}) => {
  const isTeamSingle = matchingSuccessData.teamType === 'SINGLE';
  const onClickGuide = () => {
    // TODO: 가이드 페이지로 이동
    // window.location.href = '';
  };

  return (
    <>
      <ProgressHeader
        isprogress={false}
        isprogressbar={false}
        title="매칭 결과"
      />
      <Col padding="24px" gap={85}>
        <Col gap={32}>
          <Col align={'center'} gap={8}>
            <Text
              label={`🎉호랑이 님,\n 성공적으로 매칭되었어요!`}
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
        <Col gap={10}>
          <Button
            primary={'active'}
            textSize="sm"
            onClick={onClickGuide}
            label={'시대팅 안내 사항 보러가기'}
          />
        </Col>
      </Col>
    </>
  );
};
export default MatchingSuccess;
