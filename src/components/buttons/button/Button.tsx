'use client';

import * as S from './Button.style';
import { Text } from '@/components';

export type ButtonProps = {
  primary: 'active' | 'inactive' | 'disabled';
  label: string;
  width?: number | 'full';
  height?: number;
  onClick?: () => void;
} & React.ComponentProps<'button'>;

const Button = ({
  primary = 'active',
  label,
  width = 'full',
  height = 56,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      type="button"
      primary={primary}
      width={width}
      height={height}
      onClick={onClick}
      {...props}
    >
      <Text label={label} weight={600} size="xl" />
    </S.Wrapper>
  );
};
export default Button;
