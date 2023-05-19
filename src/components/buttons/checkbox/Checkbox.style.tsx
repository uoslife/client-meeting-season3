import styled from 'styled-components';
import { CheckboxProps } from './Checkbox';

export const Wrapper = styled.button<CheckboxProps>`
  all: unset;
  cursor: ${({ variant }) => (variant === 'teritary' ? 'auto' : 'pointer')};
`;
