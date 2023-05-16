'use client';

import * as S from './DropdownInput.style';
import { IconButton, Text } from '@/components';
import { Dispatch, SetStateAction, useState } from 'react';
import { Combine } from '@/types/utils.type';
export type DropdownInputProps = Combine<
  {
    selectedOption?: number | string;
    setValue?: Dispatch<SetStateAction<number | string>>;
    label?: string;
    options?: number[] | string[];
  },
  React.ComponentProps<'button'>
>;

const DropdownInput = ({ setValue, label, options }: DropdownInputProps) => {
  const [showOption, setShowOption] = useState(false);

  const handleOptionSelect = (selectedOption: number | string) => () => {
    setValue?.(selectedOption);
    setShowOption(false);
  };
  return (
    <>
      <S.InputWrapper onClick={() => setShowOption(!showOption)}>
        <Text label={label!} size="base" weight={600} />
        <S.Icon>
          <IconButton iconName="DropdownArrow" width={12} height={6} />
        </S.Icon>
      </S.InputWrapper>
      {showOption && (
        <S.DropdownWrapper>
          <S.DummyBox></S.DummyBox>
          <S.Dropdown showOption={showOption}>
            <S.DropdownHeader>
              {label}
              <IconButton
                onClick={() => setShowOption(!showOption)}
                iconName="Delete"
                width={20}
                height={20}
              />
            </S.DropdownHeader>
            <S.DropdownOptions>
              {options?.map((val: string | number, key) => {
                return (
                  <S.DropdownOption onClick={handleOptionSelect(val)} key={key}>
                    {val}
                  </S.DropdownOption>
                );
              })}
            </S.DropdownOptions>
          </S.Dropdown>
        </S.DropdownWrapper>
      )}
    </>
  );
};

export default DropdownInput;
