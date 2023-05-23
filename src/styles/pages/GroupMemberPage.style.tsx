import styled, { css } from 'styled-components';
import { typographies, colors } from '@/styles/styles';

export const Container = styled.div`
  width: 210px;
  margin: 32px auto;
  display: flex;
  gap: 12px;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: transparent;
  background: transparent;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const Code = styled.div<{ active: Boolean }>`
  ${() => typographies.Paragraph1};
  font-weight: 800;
  font-size: 40px;
  line-height: 50px;
  width: 44px;
  text-align: center;
  border-bottom: 4px solid ${() => colors.Secondary200};
  white-space: pre;

  ${({ active }) =>
    active &&
    css`
      border-color: ${colors.Primary_500};
    `};
`;
