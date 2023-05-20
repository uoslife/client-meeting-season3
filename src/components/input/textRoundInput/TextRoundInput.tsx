'use client';

import * as S from './TextRoundInput.style';

import { Col, IconButton, Row, Text } from '@/components';
import { Combine } from '@/types/utils.type';
import { ChangeEvent } from 'react';

export type TextRoundInputProps = Combine<
  {
    type?: string;
    value?: string;
    placeholder?: string;
    isSearch?: boolean;
    status?: 'success' | 'error' | 'default';
    statusMessage?: string;
    onClick?: () => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    isActive?: boolean;
  },
  React.ComponentProps<'input'>
>;
const TextRoundInput = ({
  type = 'text',
  placeholder,
  value,
  isSearch = false,
  statusMessage,
  status = 'default',
  onClick,
  onChange,
}: TextRoundInputProps) => {
  return (
    <>
      <S.Container>
        <Col gap={4}>
          <Row width={'full'}>
            <S.Wrapper status={status} isActive={value!.length > 0}>
              <S.Input
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
              />
              {isSearch && (
                <S.Icon status={status} onClick={onClick}>
                  <IconButton iconName="SearchIcon" width={20} height={20} />
                </S.Icon>
              )}
            </S.Wrapper>
          </Row>
          {statusMessage && statusMessage.length > 0 && (
            <S.StatusMessage status={status}>{statusMessage}</S.StatusMessage>
          )}
        </Col>
      </S.Container>
    </>
  );
};

export default TextRoundInput;
