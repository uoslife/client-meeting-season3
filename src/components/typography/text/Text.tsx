'use client';

import { ComponentProps } from 'react';

import styled, { css } from 'styled-components';
import { SizeTypes, WeightTypes } from '@/types/styles.type';

import { Combine } from '@/types/utils.type';

export type TextProps = Combine<
  {
    label: string;
    as?: 'p' | 'span' | 'div';
    size?: SizeTypes;
    weight?: WeightTypes;
    color?: string;
    /**
     * 기본 폰트는 Pretendard 입니다.
     */
    font?: 'LeferiPoint-SpecialA' | '';
  },
  ComponentProps<'div'>
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
    case '3xl': {
      return css`
        ${({ theme }) => theme.Text_3xl};
      `;
    }
    case '4xl': {
      return css`
        ${({ theme }) => theme.Text_4xl};
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
  font,
  ...props
}: TextProps): JSX.Element => {
  return (
    <AsStyled
      label={label}
      weight={weight}
      size={size}
      color={color}
      font={font}
      {...props}
    >
      {label}
    </AsStyled>
  );
};
const AsStyled = styled.div<TextProps>`
  font-weight: ${({ weight }) => weight};
  ${({ size }) => getSizeStyles(size)};
  color: ${({ color }) => color};
  font-family: ${({ font }) => font};
`;

export default Text;
