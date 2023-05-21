'use client';

import { useState } from 'react';
import * as S from './Slider.style';

import { Text } from '@/components';

export type SliderProps = {};

// left, width
const Slider = () => {
  const [curLocation, setCurLocation] = useState({ left: 0, width: 0 });
  return (
    <S.Wrapper>
      <Text label={'xl'} font="LeferiBaseType-RegularA" weight={700} />
      <S.SliderWrapper>
        <S.SliderRail>
          <S.SliderInput
            type="range"
            min={0}
            max={100}
            onChange={e => console.log(e.target.value)}
          />
          <S.SliderDot style={{}}></S.SliderDot>
          <S.SliderDot />
        </S.SliderRail>
      </S.SliderWrapper>
    </S.Wrapper>
  );
};

export default Slider;
