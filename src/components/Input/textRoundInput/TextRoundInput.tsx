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
  disabled?: boolean;
  onClick?: () => void;
};
const TextRoundInput = ({
  type = 'text',
  placeholder,
  disabled,
  value,
  isSearch = false,
  statusMessage,
  status,
  onClick,
}) => {
  const [inputValue, handleInputValue, setInputValue] = useInput(value);
  return (
    <>
      <S.Container>
        <Col gap="4">
          <Row>
            <S.Wrapper status={status} isActive={inputValue?.length > 0}>
              <S.Input
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={handleInputValue}
                disabled={disabled}
              />
              {isSearch && (
                <S.Icon status={status} onClick={onClick}>
                  <IconButton iconName="SearchIcon" width={20} height={20} />
                </S.Icon>
              )}
            </S.Wrapper>
          </Row>
          {statusMessage?.length > 0 && (
            <S.StatusMessage status={status}>{statusMessage}</S.StatusMessage>
          )}
        </Col>
      </S.Container>
    </>
  );
};

export default TextRoundInput;
