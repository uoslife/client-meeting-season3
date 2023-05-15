'use client';

import styled from 'styled-components';
import { typographies, colors } from '@/styles/styles';

export const StepHandler = styled.div`
  position: fixed;
  max-width: 414px;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  width: 100%;
  align-items: center;
  background: ${colors.White};
`;

export const StepText = styled.div`
  ${() => typographies.Paragraph1};
  color: ${colors.Secondary700};
`;
