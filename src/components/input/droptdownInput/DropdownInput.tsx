'use client';

import * as S from './DropdownInput.style';
import { DeleteButton, IconButton, Text } from '@/components';
import { Dispatch, SetStateAction, useState } from 'react';
import { Combine } from '@/types/utils.type';
export type DropdownInputProps = Combine<
  {
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
        <Text label={label!} size="sm" color={'#808A98'} />
        <S.Icon>
          <IconButton iconName="DropdownArrow" width={14} height={8} />
        </S.Icon>
      </S.InputWrapper>
      {showOption && (
        <S.DropdownWrapper>
          <S.DummyBox></S.DummyBox>
          <S.Dropdown showOption={showOption}>
            <S.DropdownHeader>
              <Text label={label!} color={'#808A98'} />
              <DeleteButton
                width={12}
                height={12}
                type={'grey'}
                onClick={() => setShowOption(!showOption)}
              />
            </S.DropdownHeader>
            <S.DropdownOptions>
              {!!options &&
                options.map((val: string | number, key) => {
                  return (
                    <S.DropdownOption
                      onClick={handleOptionSelect(val)}
                      key={key}
                    >
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
