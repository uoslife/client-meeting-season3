'use client';

import * as S from './InterestSelectButton.style';
import { Text } from '@/components';
import { Combine } from '@/types/utils.type';
import Image from 'next/image';

export type InterestSelectButtonProps = Combine<
  {
    isActive: boolean;
    order: number;
    label: string;
    onClick?: () => void;
  },
  React.ComponentProps<'button'>
>;

const InterestSelectButton = ({
  isActive,
  order,
  label,
  onClick,
  ...props
}: InterestSelectButtonProps) => {
  return (
    <S.Wrapper {...props} onClick={onClick}>
      <S.ImgWrapper isActive={isActive}>
        <Image
          src={`/images/interests/${order}.svg`}
          alt={''}
          width={54}
          height={54}
        />
      </S.ImgWrapper>
      <Text label={label} size={'sm'} weight={600} color={'#808A98'} />
    </S.Wrapper>
  );
};
export default InterestSelectButton;
