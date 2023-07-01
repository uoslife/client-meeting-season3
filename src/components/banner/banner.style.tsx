import styled from 'styled-components';
import { BannerProps } from '@/components/banner/Banner';

export const Container = styled.div<BannerProps>`
  width: 100vw;
  max-width: var(--default-browser-max-width);
  height: ${({ height }) => height}px;
  position: relative;
  transform: ${({ isTransition }) => isTransition && 'translateX(-24px);'};
`;
