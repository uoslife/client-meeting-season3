'use client';

import * as S from './ProgressHeader.style';
import Row from '@/components/layout/Row';
import { colors } from '@/styles/styles';
import { useAppSelector } from '@/store/hooks';
import { IconButton } from '@/components';
import {
  PERSONAL_PROGRESSBAR_TITLE,
  GROUP_PROGRESSBAR_TITLE,
  SOCIAL_LINK,
} from '@/constants';

export type ProgressHeaderProps = {
  isProgress: boolean;
  isProgressbar: boolean;
};

const MAX_STEP = 6;

const ProgressHeader = ({
  isProgress = true,
  isProgressbar = false,
}: ProgressHeaderProps) => {
  const { meetingType, curStep } = useAppSelector(state => state.applyInfo);

  const returnTitleByMeetingType = () => {
    switch (meetingType) {
      case 'personal':
        return PERSONAL_PROGRESSBAR_TITLE[curStep - 1];
      case 'group':
        return GROUP_PROGRESSBAR_TITLE[curStep - 1];
      default:
        return '';
    }
  };
  console.log(returnTitleByMeetingType());
  return (
    <S.Wrapper>
      <S.Container isProgress={true}>
        <Row justify={'space-between'} align={'center'} fill>
          <S.SocialLink href={SOCIAL_LINK.Uoslife}>
            <IconButton iconName="Home" width={24} height={24} />
          </S.SocialLink>
          <S.HeaderTitle>{returnTitleByMeetingType()}</S.HeaderTitle>
          <S.Icon />
        </Row>

        {isProgressbar && (
          <S.ProgressContainer>
            <S.ProgressBar size={(curStep / MAX_STEP) * 100}></S.ProgressBar>
            <S.ProgressLabel>{`${curStep} / ${MAX_STEP}`}</S.ProgressLabel>
          </S.ProgressContainer>
        )}
      </S.Container>

      <S.Decorator>
        {isProgress && (
          <path
            d="M28 28C28 28 28 0 0 3.05176e-05H28V28Z"
            fill={colors.Primary700}
          />
        )}
      </S.Decorator>
    </S.Wrapper>
  );
};

export default ProgressHeader;
