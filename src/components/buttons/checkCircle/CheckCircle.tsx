'use client';

import * as S from './CheckCircle.style';

export type CheckCircleProps = {
  onClick?: () => void;
  isActive?: boolean;
  width?: number;
  height?: number;
} & React.ComponentProps<'button'>;

const CheckCircle = ({
  onClick,
  isActive,
  width = 20,
  height = 20,
  ...props
}: CheckCircleProps) => {
  return (
    <S.Wrapper {...props}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.99996 0.666687C4.39996 0.666687 0.666626 4.40002 0.666626 9.00002C0.666626 13.6 4.39996 17.3334 8.99996 17.3334C13.6 17.3334 17.3333 13.6 17.3333 9.00002C17.3333 4.40002 13.6 0.666687 8.99996 0.666687ZM7.33329 13.1667L3.16663 9.00002L4.34163 7.82502L7.33329 10.8084L13.6583 4.48335L14.8333 5.66669L7.33329 13.1667Z"
          fill={isActive ? '#2E74FF' : '#BEC4CD'}
        />
      </svg>
    </S.Wrapper>
  );
};

export default CheckCircle;
