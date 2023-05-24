'use client';

import * as S from './Checkbox.style';

export type CheckboxProps = {
  variant: 'primary' | 'secondary' | 'teritary';
  onClick?: () => void;
  isActive?: boolean;
  size?: 'base' | 'lg';
} & React.ComponentProps<'button'>;

const switchCheckboxIcon = ({
  variant,
  isActive,
  size,
}: Pick<CheckboxProps, 'variant' | 'isActive' | 'size'>) => {
  switch (variant) {
    case 'primary':
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="15"
            height="15"
            rx="3.5"
            fill={`${isActive ? '#2E74FF' : '#ECEEF0'}`}
          />
          <path
            d="M13 4L6 12L3 9"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="square"
          />
          <rect
            x="0.5"
            y="0.5"
            width="15"
            height="15"
            rx="3.5"
            stroke={`${isActive ? '#2E74FF' : '#ECEEF0'}`}
          />
        </svg>
      );
    case 'secondary':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM9.6 18L3.6 12L5.292 10.308L9.6 14.604L18.708 5.496L20.4 7.2L9.6 18Z"
            fill={`${isActive ? '#80AAFF' : '#ECEEF0'}`}
          />
        </svg>
      );
    case 'teritary':
      return (
        <svg
          width={size === 'lg' ? 30 : 18}
          height={size === 'lg' ? 30 : 18}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.99996 0.666687C4.39996 0.666687 0.666626 4.40002 0.666626 9.00002C0.666626 13.6 4.39996 17.3334 8.99996 17.3334C13.6 17.3334 17.3333 13.6 17.3333 9.00002C17.3333 4.40002 13.6 0.666687 8.99996 0.666687ZM7.33329 13.1667L3.16663 9.00002L4.34163 7.82502L7.33329 10.8084L13.6583 4.48335L14.8333 5.66669L7.33329 13.1667Z"
            fill={isActive ? '#34AAFF' : '#BEC4CD'}
          />
        </svg>
      );
    default:
      return;
  }
};
const Checkbox = ({
  variant,
  onClick,
  isActive,
  size,
  ...props
}: CheckboxProps) => {
  return (
    <S.Wrapper variant={variant} {...props}>
      {switchCheckboxIcon({ variant, isActive, size })}
    </S.Wrapper>
  );
};

export default Checkbox;
