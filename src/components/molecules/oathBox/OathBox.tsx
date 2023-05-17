'use client';

import * as S from './OathBox.style';

import { Checkbox, Col, Text } from '@/components';

export type OathBoxProps = {
  title: string;
  desc: string;
  highlight?: string;
  isActive: boolean;
  onClick: () => void;
};

const OathBox = ({
  title,
  desc,
  highlight,
  isActive,
  onClick,
}: OathBoxProps) => {
  return (
    <S.Wrapper onClick={onClick}>
      <Col gap={12}>
        <Text label={title} size="base" weight={600} color="#656D78" />
        <Text
          label={desc}
          size="sm"
          weight={400}
          color="#656D78"
          hightlight={highlight}
          style={{ lineHeight: '19.5px', textAlign: 'start' }}
        />
      </Col>
      <Checkbox isActive={isActive} variant="secondary" />
    </S.Wrapper>
  );
};

export default OathBox;
