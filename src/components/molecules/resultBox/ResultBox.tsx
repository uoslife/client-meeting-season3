'use client';

import * as S from './ResultBox.style';

import { Text } from '@/components';

import {
  ApplyData,
  ApplyDataArr,
  ApplyDataType,
  ApplyQuestionArrType,
} from '@/types/apply.type';

export type ResultBoxProps = {
  title: string;
  applyDataArr: ApplyDataArr;
};

const ResultBox = ({ title, applyDataArr }: ResultBoxProps) => {
  const switchLabelData = (data: ApplyData<ApplyDataType>) => {
    // Q&A list
    if (data.title_en === 'question') {
      return (data.data as ApplyQuestionArrType)
        .map(label => `A${label.order + 1}. ${label.label}`)
        .join('\n');
    }
    // mbti
    if (data.title_en === 'mbti' && data.type === 'info')
      return (data.data as string[]).join('');
    // 기피학과
    // if (data.title_en === 'major' && data.type === 'prefer')
    // return (data.data as string[]).join('');

    switch (typeof data.data) {
      case 'string':
        return data.data;
      case 'number':
        return data.data.toString();
      case 'object':
        return data.data.join(', ');
      default:
        return data.data;
    }
  };
  console.log(applyDataArr);
  return (
    <S.Wrapper>
      <Text label={`💙 ${title}`} size="base" weight={600} color="#3B4046" />
      <S.TextWrapper>
        {applyDataArr.map((data, i) => (
          <S.TextBox key={i}>
            <Text
              label={data.title_kr}
              size="sm"
              weight={400}
              color="#97A1AE"
              style={{ width: '70px' }}
            />
            <Text
              label={switchLabelData(data)}
              size="sm"
              weight={400}
              color="#3B4046"
            />
          </S.TextBox>
        ))}
      </S.TextWrapper>
    </S.Wrapper>
  );
};

export default ResultBox;
