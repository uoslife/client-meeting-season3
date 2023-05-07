'use client';

import { HTMLAttributes } from 'react';

import styled, { css } from 'styled-components';
import { SizeTypes } from '@/types/styles.type';

import { Combine } from '@/types/utils.type';
import { withThemeProvider } from '@/hoc/withThemeProvider';

export type TextProps = Combine<
  {
    label: string;
    as?: 'p' | 'span' | 'div';
    size?: SizeTypes;
    weight?: number;
    color?: string;
  },
  HTMLAttributes<'div'>
>;

const getSizeStyles = (size?: SizeTypes) => {
  switch (size) {
    case 'xs': {
      return css`
        ${({ theme }) => theme.Text_xs};
      `;
    }
    case 'sm': {
      return css`
        ${({ theme }) => theme.Text_sm};
      `;
    }
    case 'md': {
      return css`
        ${({ theme }) => theme.Text_md};
      `;
    }
    case 'base': {
      return css`
        ${({ theme }) => theme.Text_base};
      `;
    }
    case 'lg': {
      return css`
        ${({ theme }) => theme.Text_lg};
      `;
    }
    case 'xl': {
      return css`
        ${({ theme }) => theme.Text_xl};
      `;
    }
    case '2xl': {
      return css`
        ${({ theme }) => theme.Text_2xl};
      `;
    }
    default: {
      return css`
        ${({ theme }) => theme.Text_base};
      `;
    }
  }
};

const Text = ({
  label,
  as = 'p',
  size = 'base',
  weight = 400,
  color,
  ...props
}: TextProps): JSX.Element => {
  if (weight < 100 || weight > 900) {
    console.warn('Text only accept`100~900` as `weight` value');
    weight = weight < 100 ? 100 : weight > 900 ? 900 : weight;
  }

  const AsStyled = styled(as)<TextProps>`
    font-weight: ${({ weight }) => weight};
    ${({ size }) => getSizeStyles(size)};
    color: ${({ color }) => color};
  `;

  return (
    <AsStyled
      label={label}
      weight={weight}
      size={size}
      color={color}
      {...props}
    >
      {label}
    </AsStyled>
  );
};

export default withThemeProvider(Text);
