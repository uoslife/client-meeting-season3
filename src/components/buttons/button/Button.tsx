'use client';

import * as S from './Button.style';
import { Text } from '@/components';
import { SizeTypes } from '@/types/styles.type';
import { Combine } from '@/types/utils.type';

export type ButtonProps = Combine<
  {
    primary: 'active' | 'inactive' | 'disabled';
    label: string;
    width?: number | 'full';
    height?: number;
    textSize?: 'base' | 'sm';
    onClick?: () => void;
  },
  React.ComponentProps<'button'>
>;

const Button = ({
  primary = 'active',
  label,
  width = 'full',
  height = 56,
  textSize = 'base',
  onClick,
  ...props
}: ButtonProps) => {
  const switchTextSize = () => {
    switch (textSize) {
      case 'base':
        return 'xl';
      case 'sm':
        return 'base';

      default:
        return 'xl';
    }
  };
  return (
    <S.Wrapper
      type="button"
      primary={primary}
      width={width}
      height={height}
      onClick={onClick}
      {...props}
    >
      <Text label={label} weight={600} size={switchTextSize()} />
    </S.Wrapper>
  );
};
export default Button;
