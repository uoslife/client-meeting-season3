'use client';

import * as S from './ProgressHeader.style';
import Row from '@/components/layout/Row';
import { colors } from '@/styles/styles';
import { useAppSelector } from '@/store/hooks';
import { IconButton } from '@/components';
import { SOCIAL_LINK } from '@/constants';
const ProgressHeader = ({ onApply }) => {
  const { maxPage, currentPage, isProgressbar, title } = useAppSelector(
    state => state.progressHeader,
  );
  return (
    <S.Wrapper>
      <S.Container onApply={onApply}>
        <Row justify={'space-between'} align={'center'} fill>
          <S.SocialLink href={SOCIAL_LINK.Uoslife}>
            <IconButton iconName="Home" width={24} height={24} />
          </S.SocialLink>
          <S.HeaderTitle>{title}</S.HeaderTitle>
          <S.Icon />
        </Row>

        {isProgressbar && (
          <S.ProgressContainer>
            <S.ProgressBar size={(currentPage / maxPage) * 100}></S.ProgressBar>
            <S.ProgressLabel>{`${currentPage} / ${maxPage}`}</S.ProgressLabel>
          </S.ProgressContainer>
        )}
      </S.Container>

      <S.Decorator>
        {onApply && (
          <path
            d="M28 28C28 28 28 0 0 3.05176e-05H28V28Z"
            fill={colors.Primary700}
          />
        )}
      </S.Decorator>
    </S.Wrapper>
  );
};

ProgressHeader.defaultProps = {
  onApply: true,
};

export default ProgressHeader;
