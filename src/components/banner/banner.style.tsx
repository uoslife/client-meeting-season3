import styled from 'styled-components';
import { BannerProps } from '@/components/banner/Banner';

export const Container = styled.div<BannerProps>`
  max-width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: relative;
`;
