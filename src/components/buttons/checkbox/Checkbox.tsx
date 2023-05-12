'use client';

import * as S from './Checkbox.style';

export type CheckboxProps = {
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  isActive?: boolean;
} & React.ComponentProps<'button'>;

const switchCheckboxIcon = ({
  variant,
  isActive,
}: Pick<CheckboxProps, 'variant' | 'isActive'>) => {
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
            fill="#80AAFF"
          />
        </svg>
      );
    default:
      return;
  }
};
const Checkbox = ({ variant, onClick, isActive, ...props }: CheckboxProps) => {
  return (
    <S.Wrapper {...props}>
      {switchCheckboxIcon({ variant, isActive })}
    </S.Wrapper>
  );
};

export default Checkbox;
