'use client';

import styled, { css } from 'styled-components';
import { typographies, colors } from '@/styles/styles';
import { TextRoundInputProps } from '@/components';

export const Container = styled.div<TextRoundInputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

export const Wrapper = styled.div<TextRoundInputProps>`
  display: flex;
  border-radius: 24px;
  padding: 12px 20px;
  width: 100%;
  border: 1px solid
    ${({ isActive }) => (isActive ? colors.Primary600 : colors.Secondary200)};

  ${({ status }) =>
    status === 'error' &&
    css`
      border-color: ${colors.Red600};
    `}

  ${({ status }) =>
    status === 'success' &&
    css`
      border-color: ${colors.Primary600};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      * {
        cursor: not-allowed;
        background: ${colors.White};
      }
    `}
`;

export const Input = styled.input<TextRoundInputProps>`
  ${() => typographies.Heading6};
  font-weight: 400;
  width: 100%;
  border: none;
  color: ${({}) => colors.Secondary700};
  flex: 1;

  ${({ status }) =>
    status === 'error' &&
    css`
      border-color: ${colors.Red600};
    `}

  ${({ status }) =>
    status === 'success' &&
    css`
      border-color: ${colors.Primary600};
    `}

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.div<TextRoundInputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatusMessage = styled.p<TextRoundInputProps>`
  ${() => typographies.Text_xs};
  padding-left: 20px;
  padding-top: 5px;

  ${({ status }) =>
    status === 'error' &&
    css`
      color: ${colors.Red600};
    `}

  ${({ status }) =>
    status === 'success' &&
    css`
      color: ${colors.Primary600};
    `}
`;
