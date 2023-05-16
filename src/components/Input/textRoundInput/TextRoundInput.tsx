'use client';

import * as S from './TextRoundInput.style';

import { Col, IconButton, Row } from '@/components';
import useInput from '@/hooks/useInput';

export type TextRoundInputProps = {
  type?: string;
  value?: string;
  placeholder?: string;
  isSearch?: boolean;
  status?: 'success' | 'error' | 'default';
  statusMessage?: string;
  onClick?: () => void;
} & React.ComponentProps<'input'>;
const TextRoundInput = ({
  type = 'text',
  placeholder,
  value,
  isSearch = false,
  statusMessage,
  status,
  onClick,
}: TextRoundInputProps) => {
  const [inputValue, handleInputValue] = useInput(value);
  return (
    <>
      <S.Container>
        <Col gap={4}>
          <Row>
            <S.Wrapper status={status} isActive={inputValue!.length > 0}>
              <S.Input
                value={inputValue}
                type={type}
                placeholder={placeholder}
                onChange={handleInputValue}
              />
              {isSearch && (
                <S.Icon status={status} onClick={onClick}>
                  <IconButton iconName="SearchIcon" width={20} height={20} />
                </S.Icon>
              )}
            </S.Wrapper>
          </Row>
          {statusMessage!.length > 0 && (
            <S.StatusMessage status={status}>{statusMessage}</S.StatusMessage>
          )}
        </Col>
      </S.Container>
    </>
  );
};

export default TextRoundInput;
