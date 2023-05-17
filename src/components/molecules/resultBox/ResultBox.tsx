'use client';

import * as S from './ResultBox.style';

import { Text } from '@/components';

import { ApplyDataArr } from '@/types/apply.type';

export type ResultBoxProps = {
  title: string;
  applyDataArr: ApplyDataArr;
};

const ResultBox = ({ title, applyDataArr }: ResultBoxProps) => {
  return (
    <S.Wrapper>
      <Text label={`💙 ${title}`} size="base" weight={600} color="#3B4046" />
      <S.TextWrapper>
        {applyDataArr.map(data => (
          <S.TextBox>
            <Text
              label={data.title_kr}
              size="sm"
              weight={400}
              color="#97A1AE"
              style={{ width: '64px' }}
            />
            <Text label={data.data} size="sm" weight={400} color="#3B4046" />
          </S.TextBox>
        ))}
      </S.TextWrapper>
    </S.Wrapper>
  );
};

export default ResultBox;
