'use client';

import { Combine } from '@/types/utils.type';
import styled, { css } from 'styled-components';

const Container = styled.div<PaddleProps>`
  ${({ top }) =>
    top &&
    css`
      padding-top: ${top}px;
    `};

  ${({ bottom }) =>
    bottom &&
    css`
      padding-bottom: ${bottom}px;
    `};

  ${({ left }) =>
    left &&
    css`
      padding-left: ${left}px;
    `};

  ${({ right }) =>
    right &&
    css`
      padding-right: ${right}px;
    `};
`;

export type PaddleProps = Combine<
  {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    children: React.ReactNode;
  },
  React.ComponentProps<'div'>
>;

const Paddler = ({
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  children,
  ...props
}: PaddleProps) => {
  return <Container {...props}>{children}</Container>;
};

export default Paddler;
