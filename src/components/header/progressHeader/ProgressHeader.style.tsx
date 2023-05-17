'use client';

import styled, { css } from 'styled-components';
import { typographies, colors } from '@/styles/styles';

import { ProgressHeaderProps } from '@/components';

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Container = styled.div<Pick<ProgressHeaderProps, 'isprogress'>>`
  position: relative;
  padding: 16px 24px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);

  ${({ isprogress }) =>
    isprogress &&
    css`
      background: ${colors.Primary700};
      color: ${colors.White};
    `};
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  min-width: 24px;
  gap: 8px;
  cursor: pointer;
`;

export const HeaderTitle = styled.h5`
  ${() => typographies.Heading5};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 16px;
`;

export const ProgressBar = styled.div<{ size: number }>`
  position: relative;
  height: 4px;
  border-radius: 4px;
  background: ${colors.Primary000};
  flex: 1;

  &:before {
    content: ' ';
    position: absolute;
    left: 0;
    top: 0;
    height: 4px;
    width: ${({ size }) => (size ? size : 0)}%;
    min-width: 0;
    max-width: 100%;
    border-radius: 4px;
    background: ${colors.Primary500};
    transition: 0.5s ease-in-out;
  }
`;

export const ProgressLabel = styled.p`
  ${() => typographies.Heading6};
  color: ${colors.Primary300};
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
`;

export const SocialLink = styled.a`
  display: flex;
  gap: 4px;
`;

export const Decorator = styled.svg`
  position: absolute;
  right: 0;
  bottom: -28px;
  height: 28px;
  width: 28px;
`;
