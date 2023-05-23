import styled, { css } from 'styled-components';
import { RoundedRectangleButtonProps } from '@/components/buttons/roundedRectangleButton/RoundedRectangleButton';
import { colors } from '@/styles/styles';

export const Wrapper = styled.div<Omit<RoundedRectangleButtonProps, 'label'>>`
  all: unset;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  height: ${({ height }) => `${height}px`};
  cursor: pointer;

  ${({ type }) => {
    switch (type) {
      case 'primary':
        return css`
          padding: 6px 12px;
          background: ${colors.Primary_500};
          color: ${colors.White};
          border-radius: 8px;
        `;
      case 'skyBlue':
        return css`
          padding: 5.5px 12px;
          background: ${colors.Primary_100};
          color: ${colors.Primary_500};
          border-radius: 12px;
        `;
      case 'white':
        return css`
          border: #acb4bf 1px solid;
          padding: 12px 16px;
          background: ${colors.White};
          color: ${colors.Black};
          border-radius: 12px;
        `;
      default:
        return '';
    }
  }}
`;
