'use client';

import { MatchingSuccessData } from '@/app/result/page';
import * as S from './TeamResultBox.style';

import { Checkbox, Col, IconButton, Row, Text, Toast } from '@/components';
import { Dispatch, SetStateAction, forwardRef, useRef, useState } from 'react';

export type TeamResultBoxProps = {
  teamName: string;
  type: 'apply' | 'confirm';
  status: 'waiting' | 'complete';
};

// eslint-disable-next-line react/display-name
const KakaoIdInfoWrapper = forwardRef(
  (
    {
      kakaoIdInfo,
      handleCopyButton,
    }: {
      kakaoIdInfo: { nickname: string; kakaoId: string };
      handleCopyButton: () => void;
    },
    ref: React.Ref<HTMLInputElement>,
  ) => {
    return (
      <Row justify={'space-between'} width="full">
        <Row gap={8} align={'center'}>
          <IconButton iconName="User" width={20} height={20} />
          <Text label={kakaoIdInfo.nickname} weight={600} />
        </Row>
        <Row gap={8} align={'center'}>
          <Text label={kakaoIdInfo.kakaoId} color={'#34AAFF'} weight={600} />
          <S.CopyButton onClick={handleCopyButton}>복사</S.CopyButton>
        </Row>
        <input
          type="text"
          ref={ref}
          value={kakaoIdInfo.kakaoId}
          style={{ position: 'fixed', top: '-100px', left: '-100px' }}
        />
      </Row>
    );
  },
);

const TeamResultBox = ({
  kakaoIdArr,
}: {
  kakaoIdArr: MatchingSuccessData['kakaoIdArr'];
}) => {
  const [isCopyToastOpen, setIsCopyToastOpen] = useState(false);
  const shareRef = useRef<HTMLInputElement>(null);
  const handleCopyButton = () => {
    shareRef.current?.focus();
    shareRef.current?.select();
    document.execCommand('copy');
    setIsCopyToastOpen(true);
    setTimeout(() => {
      setIsCopyToastOpen(false);
    }, 5000);
  };
  return (
    <Col>
      <Col gap={8}>
        <S.TeamContainer>
          <Row self-align="left" width="full">
            <Text label={'💙 상대의 카카오톡 ID'} weight={600} />
          </Row>
          <Col gap={24}>
            {kakaoIdArr.map((kakaoIdInfo, i) => (
              <KakaoIdInfoWrapper
                key={i}
                kakaoIdInfo={kakaoIdInfo}
                handleCopyButton={handleCopyButton}
                ref={shareRef}
              />
            ))}
          </Col>
        </S.TeamContainer>
      </Col>
      <Toast
        text={'복사되었습니다!'}
        isOpen={isCopyToastOpen}
        autoClose={5000}
      />
    </Col>
  );
};

export default TeamResultBox;
