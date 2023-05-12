'use client';

import * as S from './MainHeader.style';

import { IconButton, Text } from '@/components';

const MainHeader = () => {
  const onClickBackButton = () => {
    document.location.href = 'http://uoslife.com';
  };
  return (
    <S.Header>
      <IconButton
        iconName="Left"
        width={12}
        height={20}
        onClick={onClickBackButton}
      />
      <Text
        label="시대생 메인"
        as="div"
        size="base"
        weight={600}
        color={'#2E74FF'}
        style={{ marginLeft: '8px', paddingTop: '2px' }}
      />
    </S.Header>
  );
};

export default MainHeader;
