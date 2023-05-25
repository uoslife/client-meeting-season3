import { colors } from '@/styles/styles';
import styled, { css } from 'styled-components';

const TrackStyles = css`
  appearance: none;
  background: transparent;
  border: transparent;
`;

const ThumbStyles = css`
  appearance: none;
  pointer-events: all;
  width: 16px;
  height: 16px;
  border-radius: 0px;
  border: 0 none;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

//input
export const InputWrapper = styled.div`
  width: calc(100% + 16px);
  margin: 0 calc(16px / -2);
  position: absolute;
  height: 16px;
`;

export const SliderInput = styled.input`
  position: absolute;
  width: 100%;
  pointer-events: none;
  appearance: none;
  height: 100%;
  opacity: 0;
  z-index: 3;
  padding: 0;
  margin: 0;
  left: 0;
  width: calc(100% - 16px);
  left: 8px;
  &::-ms-track {
    ${TrackStyles}
  }

  &::-moz-range-track {
    ${TrackStyles}
  }

  &:focus {
    &::-webkit-slider-runnable-track {
      ${TrackStyles};
    }
  }

  &::-ms-thumb {
    ${ThumbStyles}
  }

  &::-moz-range-thumb {
    ${ThumbStyles}
  }

  &::-webkit-slider-thumb {
    ${ThumbStyles}
  }
`;

//rail
export const RailWrapper = styled.div`
  width: 100%;
  position: absolute;
  height: 16px;
  width: calc(100% - 16px);
  left: 8px;
`;

export const SliderRail = styled.div`
  position: absolute;
  width: 100%;
  height: 8px;
  background: ${colors.Primary_100};
  border-radius: 99px;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

export const SliderTrack = styled.div`
  position: absolute;
  height: 100%;
  background: ${colors.Primary_500};
`;

export const SliderDot = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background: #ffffff;
  border: 1px solid #dee1e3;
  border-radius: 50%;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  margin-left: calc(16px / -2);
  z-index: 2;
`;

// guideText

export const GuideTextWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
