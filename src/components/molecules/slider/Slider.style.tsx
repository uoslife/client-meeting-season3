import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SliderWrapper = styled.div`
  position: relative;
`;

export const SliderRail = styled.div`
  position: absolute;
  width: 100%;
  height: 8px;
  background: #f0f5ff;
  border-radius: 99px;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

export const SliderTrack = styled.span`
  width: 0;
  height: 8px;
  background: #2e74ff;
  top: 50%;
  transform: translateY(-50%);
`;

export const SliderDot = styled.span`
  width: 16px;
  height: 16px;
  background: #ffffff;
  border: 1px solid #dee1e3;
  top: 50%;
  transform: translateY(-50%);
`;

export const SliderInput = styled.input`
  appearance: none;
  position: absolute;
  width: 100%;
  pointer-events: none;
  appearance: none;
  height: 100%;
  opacity: 0;
  z-index: 3;
  padding: 0;
  cursor: grab;
`;
