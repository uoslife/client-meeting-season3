'use client';

import styled, { keyframes } from 'styled-components';
import { typographies, colors } from '@/styles/styles';
import { DropdownInputProps } from '@/components/input/droptdownInput/DropdownInput';

export const downToUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: translateZ(0);
  }
`;
export const InputWrapper = styled.div<DropdownInputProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 20px;
  border: 1px solid ${colors.Secondary200};
  border-radius: 24px;
  cursor: pointer;
`;

export const Icon = styled.div<DropdownInputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropdownWrapper = styled.div<DropdownInputProps>`
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  max-width: 414px;
  background: rgba(0, 0, 0, 0.8);
  margin: 0 auto;
  width: 100%;
  backdrop-filter: blur(3px);
`;

export const DummyBox = styled.div<DropdownInputProps>`
  height: 100%;
  flex: 1;
`;

export const Dropdown = styled.div<
  DropdownInputProps & { showOption: boolean }
>`
  max-width: 414px;
  height: 350px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  animation: ${downToUp} 0.4s;
`;

export const DropdownHeader = styled.div<DropdownInputProps>`
  ${() => typographies.Heading5};
  background: ${colors.White};
  border-radius: 16px 16px 0 0;
  width: 100%;
  padding: 16px 24px;
  color: ${colors.Secondary600};
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
    height: 10px;
    width: 10px;
  }
`;

export const DropdownOptions = styled.div<DropdownInputProps>`
  background: ${colors.White};
  height: 100%;
  width: 100%;
  flex: 1;
  overflow: scroll;
  padding: 0 24px;
`;

export const DropdownOption = styled.div<DropdownInputProps>`
  ${() => typographies.Heading5};
  padding: 12px 0;
  color: ${colors.Secondary900};
  cursor: pointer;
`;