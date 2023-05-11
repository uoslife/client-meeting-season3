'use client';

import styled, {css} from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: ${({wrap}) => wrap};
  flex-direction: ${({reverse}) => (reverse ? 'row-reverse' : 'row')};
  justify-content: ${({justify}) => justify};
  align-items: ${({align}) => align};
  gap: ${({gap}) => gap}px;
  padding: ${({padding}) => padding}px;

  ${({fill}) =>
  fill &&
  css`
    flex: 1;
  `}
`;

type RowProps = {
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
  padding?: number;
  fill?: boolean;
};

const Row = ({children, ...props}:RowProps) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}

Row.defaultProps = {
  gap: 0,
  reverse: false,
  wrap: 'nowrap',
  justify: 'flex-start',
  align: 'flex-start',
  padding: 0,
  fill: false,
}

export default Row;
