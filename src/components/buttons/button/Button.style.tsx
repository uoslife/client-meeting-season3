import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

export const Wrapper = styled.button<Omit<ButtonProps, 'label'>>`
  all: unset;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 0;

  width: ${({ width }) => (width === 'full' ? '100%' : `${width}px`)};
  height: ${({ height }) => `${height}px`};
  border-radius: 99px;
  cursor: pointer;

  ${({ primary }) => {
    switch (primary) {
      case 'active':
        return css`
          background: #2e74ff;
          color: #ffffff;
        `;
      case 'inactive':
        return css`
          background: #f0f5ff;
          /* Primary/500 */
          color: #4c89ff;
        `;
      case 'disabled':
        return css`
          background: #f9f9fa;
          /* Secondary/800 */
          color: #656d78;
        `;
      default:
        return '';
    }
  }}
`;
