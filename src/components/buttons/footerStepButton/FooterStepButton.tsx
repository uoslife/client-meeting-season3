'use client';

import styled, { css } from 'styled-components';
import { colors } from '@/styles/styles';
import { Combine } from '@/types/utils.type';

const Button = styled.div<FooterButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 52px;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  ${({ type }) => {
    switch (type) {
      case 'prev':
        return css`
          border: 2px solid ${colors.Primary_400};
          background: ${colors.White};
          svg {
            rotate: 180deg;
            fill: ${colors.Primary_400};
          }
          &:hover {
            border: 2px solid ${colors.White};
            background: ${colors.Primary_400};
            svg {
              fill: ${colors.White};
            }
          }
        `;
      default:
      case 'next':
        return css`
          background: ${colors.Primary_500};
          svg {
            fill: ${colors.White};
          }
          &:hover {
            background: ${colors.White};
            svg {
              fill: ${colors.Primary_500};
            }
          }
        `;
    }
  }};
  ${({ disabled }) =>
    disabled &&
    css`
      background: ${colors.Secondary100};
      border-color: ${colors.Secondary100};
      &:hover {
        background: ${colors.Secondary100};
      }
      svg {
        fill: ${colors.Green000};
      }
    `}
`;
export type FooterButtonProps = Combine<
  {
    disabled?: boolean;
    type?: 'next' | 'prev';
    onClick?: () => void;
  },
  React.ComponentProps<'div'>
>;

const FooterStepButton = ({
  onClick,
  type,
  disabled = false,
}: FooterButtonProps) => {
  return (
    <Button onClick={onClick} type={type} disabled={disabled}>
      <svg height={24} viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.591797 10.7801L26.9976 10.7801L17.9227 1.97917L19.5052 0.444336L30.1626 10.7801C30.5508 11.1566 31.4066 11.9866 31.4066 11.9866L19.4783 23.5554L17.8958 22.0206L27.2476 12.9506L0.591797 12.9506V10.7801Z" />
      </svg>
    </Button>
  );
};

export default FooterStepButton;
