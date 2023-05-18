'use client';

import styled, { css } from 'styled-components';

import { Combine } from '@/types/utils.type';

const Container = styled.div<RowProps>`
  display: flex;
  flex-wrap: ${({ wrap }) => wrap};
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap}px;
  width: 100%;
  padding: ${({ padding }) => padding};

  ${({ fill }) =>
    fill &&
    css`
      flex: 1;
    `}
`;

export type RowProps = Combine<
  {
    gap?: number;
    reverse?: boolean;
    justify?:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    align?: 'flex-start' | 'flex-end' | 'center';
    padding?: string;
    fill?: boolean;
    children: React.ReactNode;
  },
  React.ComponentProps<'div'>
>;

const Row = ({
  gap = 0,
  reverse = false,
  justify = 'flex-start',
  align = 'flex-start',
  padding = '0',
  fill = false,
  children,
  ...props
}: RowProps) => {
  return (
    <Container
      gap={gap}
      reverse={reverse}
      justify={justify}
      align={align}
      padding={padding}
      fill={fill}
      {...props}
    >
      {children}
    </Container>
  );
};

export default Row;
