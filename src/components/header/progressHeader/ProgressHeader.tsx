'use client';

import * as S from './ProgressHeader.style';
import Row from '@/components/layout/Row';
import { colors } from '@/styles/styles';
import { useAppSelector } from '@/store/hooks';
import { IconButton } from '@/components';
import {
  PERSONAL_PROGRESSBAR_TITLE,
  GROUP_LEADER_PROGRESSBAR_TITLE,
  GROUP_MEMBER_PROGRESSBAR_TITLE,
  SOCIAL_LINK,
} from '@/constants';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export type ProgressHeaderProps = {
  isprogress: boolean;
  isprogressbar: boolean;
  title?: string;
};

const ProgressHeader = ({
  isprogress = true,
  isprogressbar = false,
  title,
}: ProgressHeaderProps) => {
  const router = useRouter();
  const { meetingType, curStep } = useAppSelector(state => state.applyInfo);

  const [maxStep, setMaxStep] = useState(0);

  useEffect(() => {
    switch (meetingType) {
      case 'personal':
        setMaxStep(5);
        break;
      case 'groupLeader':
        setMaxStep(6);
        break;
      case 'groupMember':
        setMaxStep(3);
        break;
      default:
        break;
    }
  }, [meetingType]);

  const returnTitleByMeetingType = () => {
    switch (meetingType) {
      case 'personal':
        return PERSONAL_PROGRESSBAR_TITLE[curStep - 1];
      case 'groupLeader':
        return GROUP_LEADER_PROGRESSBAR_TITLE[curStep - 1];
      case 'groupMember':
        return GROUP_MEMBER_PROGRESSBAR_TITLE[curStep - 1];
      default:
        return '';
    }
  };

  return (
    <S.Wrapper>
      <S.Container isprogress={isprogress}>
        <Row justify={'space-between'} align={'center'} fill>
          <S.SocialLink onClick={() => router.push('/')}>
            <IconButton iconName="Home" width={24} height={24} />
          </S.SocialLink>
          <S.HeaderTitle>{title || returnTitleByMeetingType()}</S.HeaderTitle>
          <S.Icon />
        </Row>

        {isprogressbar && (
          <S.ProgressContainer>
            <S.ProgressBar size={(curStep / maxStep) * 100}></S.ProgressBar>
            <S.ProgressLabel>{`${curStep} / ${maxStep}`}</S.ProgressLabel>
          </S.ProgressContainer>
        )}
      </S.Container>

      <S.Decorator>
        {isprogress && (
          <path
            d="M28 28C28 28 28 0 0 3.05176e-05H28V28Z"
            fill={colors.Primary_500}
          />
        )}
      </S.Decorator>
    </S.Wrapper>
  );
};

export default ProgressHeader;
