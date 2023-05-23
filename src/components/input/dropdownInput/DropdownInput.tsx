'use client';

import * as S from './DropdownInput.style';

import { DeleteButton, IconButton, Text } from '@/components';
import { Dispatch, SetStateAction, useState } from 'react';
import { Combine } from '@/types/utils.type';
export type DropdownInputProps = Combine<
  {
    value: string | number;
    setValue: Dispatch<SetStateAction<string | number>>;
    label: string;
    options: number[] | string[];
  },
  React.ComponentProps<'button'>
>;

const DropdownInput = ({
  value,
  setValue,
  label,
  options,
}: DropdownInputProps) => {
  const [showOption, setShowOption] = useState(false);

  const onClickOptionSelect = (selectedOption: number | string) => () => {
    setValue(selectedOption);
    setShowOption(false);
  };

  return (
    <>
      <S.InputWrapper onClick={() => setShowOption(!showOption)}>
        <Text
          label={
            !!value
              ? typeof value === 'number'
                ? value.toString()
                : value
              : label
          }
          size="sm"
          color={!value ? '#808A98' : '#3B4046'}
        />
        <S.Icon>
          <IconButton iconName="DropdownArrow" width={14} height={8} />
        </S.Icon>
      </S.InputWrapper>
      {showOption && (
        <S.DropdownWrapper>
          <S.DummyBox></S.DummyBox>
          <S.Dropdown showOption={showOption}>
            <S.DropdownHeader>
              <Text label={label} color={'#808A98'} />
              <DeleteButton
                width={12}
                height={12}
                type={'grey'}
                onClick={() => setShowOption(!showOption)}
              />
            </S.DropdownHeader>
            <S.DropdownOptions>
              {options.map((val: string | number, i) => {
                return (
                  <S.DropdownOption onClick={onClickOptionSelect(val)} key={i}>
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
