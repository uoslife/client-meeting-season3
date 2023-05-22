import styled from 'styled-components';
import { InterestSelectButtonProps } from '@/components/buttons/interstSelectButton/InterestSelectButton';

export const Wrapper = styled.button`
  all: unset;
  box-sizing: border-box;
  position: relative;
  width: 100px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  cursor: pointer;
`;

export const ImgWrapper = styled.div<
  Pick<InterestSelectButtonProps, 'isActive'>
>`
  width: 90px;
  height: 90px;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background: ${({ isActive }) => (isActive ? '#000000B2' : '#F0F5FF')};
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 16px;
  width: 100%;
  cursor: pointer;
`;
