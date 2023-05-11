import styled, { css } from 'styled-components';

export type ColProps = {
  gap?: number;
  reverse?: boolean;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  align?: 'flex-start' | 'flex-end' | 'center';
  padding?: number;
  fill?: boolean;
  children?: React.ReactNode;
};

const Container = styled.div<ColProps>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap}px;
  padding: ${({ padding }) => padding}px;
  width: 100%;
  height: 100%;

  ${props =>
    props.fill &&
    css`
      flex: 1;
    `}
`;

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
