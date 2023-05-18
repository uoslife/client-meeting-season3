import styled, { css, keyframes } from 'styled-components';
import { typographies, colors } from '@/styles/styles';
import { BottomSheetProps } from '@/components';

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
export const GrayHandler = styled.div<BottomSheetProps>`
  background: ${colors.Secondary200};
  width: 40px;
  height: 4px;
  margin-top: 4px;
  border-radius: 2px;
`;

export const DivLine = styled.div<BottomSheetProps>`
  border-top: 1px solid ${colors.Secondary200};
  width: 100%;
  margin-top: 8px;
`;
export const SubTitle = styled.div<BottomSheetProps>`
  color: ${colors.Secondary700};
  font-size: 14px;
  margin-bottom: 6px;
`;
export const HighlightedBold = styled.span<BottomSheetProps>`
  ${() => typographies.Heading3};
  color: ${colors.Secondary900};
  font-weight: 800;
`;

export const SheetLayout = styled.div<BottomSheetProps>`
  position: fixed;
  flex-direction: column;
  display: flex;
  width: 100vw;
  bottom: 0;
  left: 0;
  z-index: 1000;
  animation: ${downToUp} 0.4s;
`;

export const Sheet = styled.div<BottomSheetProps>`
  padding: 20px 37px;
  box-shadow: 0px -4px 36px rgba(0, 0, 0, 0.08);
  border-radius: 24px 24px 0 0;
  max-width: 414px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.White};
`;

export const Button = styled.div<BottomSheetProps>`
  all: unset;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  cursor: pointer;

  ${({ type }) => {
    switch (type) {
      case 'primary':
        return css`
          padding: 25px 80px;
          background: ${colors.Primary700};
          color: ${colors.White};
          border-radius: 8px;
        `;
      case 'white':
        return css`
          padding: 25px 80px;
          background: ${colors.Secondary100};
          color: ${colors.Black};
          border-radius: 12px;
        `;
      default:
        return '';
    }
  }}
`;
