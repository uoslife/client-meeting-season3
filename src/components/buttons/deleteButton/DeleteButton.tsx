'use client';

import styled from 'styled-components';

export const Wrapper = styled.div<DeleteButtonProps>`
  all: unset;
  cursor: pointer;
`;

export type DeleteButtonProps = {
  type?: 'black' | 'white' | 'grey' | 'red';
  height?: number;
  width?: number;
  onClick?: () => void;
} & React.ComponentProps<'div'>;

const getColorType = (type: string) => {
  switch (type) {
    case 'black':
      return '#222222';
    case 'white':
      return '#fff';
    case 'grey':
      return '#97A1AE';
    case 'red':
      return '#FF5334';
  }
};

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
          stroke={getColorType!(type)}
          strokeLinecap="round"
        />
      </svg>
    </Wrapper>
  );
};

export default DeleteButton;
