'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import * as S from './Slider.style';

import { Col, Text } from '@/components';
import { colors } from '@/styles/styles';

export type SliderProps = {
  guideText: string[];
  labelExplain: string;
  min: number;
  max: number;
  value: {
    min: number;
    max: number;
  };
  step: number;
  onChange: Dispatch<
    SetStateAction<{
      min: number;
      max: number;
    }>
  >;
};

// left, width
const Slider = ({
  guideText,
  labelExplain,
  min,
  max,
  value,
  step,
  onChange,
}: SliderProps) => {
  // const [curLocation, setCurLocation] = useState({ left: 0, width: 0 });
  const [minValue, setMinValue] = useState(value ? value.min : min);
  const [maxValue, setMaxValue] = useState(value ? value.max : max);

  useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newMinVal = Math.min(+e.target.value, maxValue - step);
    if (!value) setMinValue(newMinVal);
    onChange({ min: newMinVal, max: maxValue });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newMaxVal = Math.max(+e.target.value, minValue + step);
    if (!value) setMaxValue(newMaxVal);
    onChange({ min: minValue, max: newMaxVal });
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  const [label, setLabel] = useState('');
  useEffect(() => {
    const newLabel =
      guideText[value.min / 10] +
      ' - ' +
      guideText[value.max / 10] +
      labelExplain;

    setLabel(newLabel);
  }, [guideText, labelExplain, value.max, value.min]);
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <Text
          label={label}
          font="LeferiBaseType-RegularA"
          weight={700}
          size="xl"
          color={colors.Primary_500}
          style={{ textAlign: 'center' }}
        />
        <S.SliderWrapper>
          <S.InputWrapper>
            <S.SliderInput
              type="range"
              value={minValue}
              min={min}
              max={max}
              step={step}
              onChange={handleMinChange}
            />
            <S.SliderInput
              type="range"
              value={maxValue}
              min={min}
              max={max}
              step={step}
              onChange={handleMaxChange}
            />
          </S.InputWrapper>
          <S.RailWrapper>
            <S.SliderDot style={{ left: `${minPos}%` }}></S.SliderDot>
            <S.SliderRail>
              <S.SliderTrack
                style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
              />
            </S.SliderRail>
            <S.SliderDot style={{ left: `${maxPos}%` }} />
          </S.RailWrapper>
        </S.SliderWrapper>
      </S.TopWrapper>
      <S.GuideTextWrapper>
        {guideText.map((label, i) => (
          <Text key={i} label={label} weight={400} size="sm" color="#656D78" />
        ))}
      </S.GuideTextWrapper>
    </S.Wrapper>
  );
};

export default Slider;
