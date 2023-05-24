'use client';

import * as S from './AnimalButton.style';

import { Checkbox, Text } from '@/components';
import { Combine } from '@/types/utils.type';
import Image from 'next/image';

export type AnimalButtonProps = Combine<
  {
    isActive: boolean;
    order: number;
    label: string;
    onClick?: () => void;
  },
  React.ComponentProps<'button'>
>;

const AnimalButton = ({
  isActive,
  order,
  label,
  onClick,
  ...props
}: AnimalButtonProps) => {
  return (
    <S.Wrapper onClick={onClick} {...props}>
      {isActive && (
        <Checkbox
          variant={'teritary'}
          isActive={true}
          style={{ position: 'absolute', top: '0', right: '0' }}
          size="lg"
        />
      )}
      <S.ImgWrapper>
        <Image
          src={`/images/animals/${order}.svg`}
          alt=""
          width={70}
          height={70}
          style={{ width: 'auto', height: 'auto' }}
        />
      </S.ImgWrapper>
      <Text
        label={label}
        weight={600}
        size="sm"
        color={isActive ? '#4C89FF' : '#808A98'}
      />
    </S.Wrapper>
  );
};
export default AnimalButton;
