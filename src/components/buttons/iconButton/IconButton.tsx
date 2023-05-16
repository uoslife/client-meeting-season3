'use client';

import Image from 'next/image';

import * as S from './IconButton.style';

export type IconButtonProps = {
  iconName?:
    | 'Left'
    | 'Share'
    | 'Instagram'
    | 'Kakaotalk'
    | 'Delete'
    | 'DropdownArrow'
    | 'Home';
  width?: number;
  height?: number;
  onClick?: () => void;
} & React.ComponentProps<'button'>;

const IconButton = ({
  iconName,
  width,
  height,
  onClick,
  ...props
}: IconButtonProps) => {
  return (
    <S.Wrapper type="button" onClick={onClick} {...props}>
      <Image
        alt={`${iconName} 버튼`}
        src={`/images/icons/${iconName}.svg`}
        width={width}
        height={height}
      />
    </S.Wrapper>
  );
};
export default IconButton;
