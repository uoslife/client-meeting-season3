import styled, { css } from 'styled-components';
import { Combine } from '@/types/utils.type';

const Container = styled.div<ColProps>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap}px;
  padding: ${({ padding }) => padding};
  width: 100%;
  height: 100%;

  ${fill =>
    fill &&
    css`
      flex: 1;
    `}
`;

export type ColProps = Combine<
  {
    gap?: number;
    reverse?: boolean;
    justify?:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around';
    align?: 'flex-start' | 'flex-end' | 'center';
    padding?: string;
    fill?: boolean;
    children: React.ReactNode;
  },
  React.ComponentProps<'div'>
>;

const Col = ({ children, ...props }: ColProps) => {
  return <Container {...props}>{children}</Container>;
};

Col.defaultProps = {
  gap: 0,
  reverse: false,
  justify: 'flex-start',
  align: 'flex-start',
  padding: 0,
  fill: false,
};

export default Col;
