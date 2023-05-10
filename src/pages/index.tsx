'use client';
import Image from 'next/image';

import { Button, MainHeader, Text } from '@/components';

import * as S from '@/styles/pages/page.style';

const Main = () => {
  return (
    <S.MainWrapper>
      <MainHeader />
      <Image
        src={'/images/MainBanner.png'}
        alt="메인 배너"
        height={333}
        width={414}
      />
      <Text label={'시대팅 시즌 3'} size={'2xl'} />
      <Text
        label={
          '이번엔 1대1도, 3:3도 가능하다! 새로워진 시대팅과 함께해보세요🥰'
        }
        size={'base'}
      />
      <Text label={'신청기간'} size={'lg'} weight={300} />
      <Button primary="active" label="신청 정보 확인하기" />
    </S.MainWrapper>
  );
};

export default Main;
