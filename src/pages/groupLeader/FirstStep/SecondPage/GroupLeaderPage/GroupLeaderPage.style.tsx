import styled, { keyframes } from 'styled-components';
import { typographies, colors } from '@/styles/styles';

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
    border: 2px solid #0000ffff;
    border-top: 2px solid #fff;
  }
  50% {
    transform: rotate(720deg);
    border: 2px solid #00ff77ff;
    border-top: 2px solid #fff;
  }
  100% {
    transform: rotate(1440deg);
    border: 2px solid #0000ffff;
    border-top: 2px solid #fff;
  }
`;
export const Code = styled.div`
  font-family: 'Leferi Point', sans-serif;
  color: ${colors.Secondary900};
  font-size: 48px;
  font-weight: 800;
  align-self: center;
  padding-bottom: 30px;
`;
export const Divider = styled.div`
  border-bottom: 1px solid ${colors.Secondary300};
  width: 100%;
`;

export const Loader = styled.div`
  border-radius: 50%;
  width: 14px;
  height: 14px;
  animation: ${spinner} 2s cubic-bezier(0.77, 0.26, 0.29, 0.79) infinite;
  margin: 10px;
`;

export const TeamContainer = styled.div`
  background: ${colors.Secondary000};
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 12px;
`;

export const JoinLabel = styled.div<{ isActive: Boolean }>`
  ${() => typographies.Heading6};
  color: ${({ isActive }) =>
    isActive ? colors.Primary600 : colors.Secondary400};
`;
