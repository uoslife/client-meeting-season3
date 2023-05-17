'use client';

import styled from 'styled-components';

export const Wrapper = styled.div<DeleteButtonProps>`
  all: unset;
  cursor: pointer;
`;

export type DeleteButtonProps = {
  type?: 'black' | 'white';
  height?: number;
  width?: number;
  onClick?: () => void;
} & React.ComponentProps<'div'>;
const DeleteButton = ({ type, height, width, onClick }: DeleteButtonProps) => {
  return (
    <Wrapper type={type} onClick={onClick}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 0.5L7.5 7.5M7.5 0.5L0.5 7.5"
          stroke={`${type === 'black' ? '#222222' : '#fff'}`}
          strokeLinecap="round"
        />
      </svg>
    </Wrapper>
  );
};

export default DeleteButton;
