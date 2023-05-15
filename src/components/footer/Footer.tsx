'use client';

import * as S from '@/components/footer/Footer.style';
import { useAppSelector } from '@/store/hooks';
import FooterStepButton from '@/components/buttons/FooterStepButton';

export type FooterProps = {
  disabled?: boolean;
  onClick?: () => void;
};
const Footer = ({ disabled = false, onClick }: FooterProps) => {
  const { maxPage, curPage } = useAppSelector(state => state.applyInfo);

  return (
    <S.StepHandler>
      <FooterStepButton type={'prev'}></FooterStepButton>
      <S.StepText>{`${curPage} / ${maxPage}`}</S.StepText>
      <FooterStepButton
        type={'next'}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
      ></FooterStepButton>
    </S.StepHandler>
  );
};

export default Footer;
