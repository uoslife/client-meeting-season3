'use client';

import styled, {css} from "styled-components";

const Container = styled.div`
    ${({top}) =>
  top &&
  css`
      padding-top: ${top}px;
    `};

    ${({bottom}) =>
  bottom &&
  css`
      padding-bottom: ${bottom}px;
    `};

    ${({left}) =>
  left &&
  css`
      padding-left: ${left}px;
    `};

    ${({right}) =>
  right &&
  css`
      padding-right: ${right}px;
    `};
    `;

type PaddleProps = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

const Paddler = ({children, ...props}:PaddleProps) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}
Paddler.defaultProps = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
}

export default Paddler;
