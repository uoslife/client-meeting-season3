'use client';

import { useEffect, useState } from 'react';

import { Col, Footer, OathBox, Text } from '@/components';
import { OATH_PHRASES } from '@/constants';
import { useRouter } from 'next/navigation';

// import { useAppSelector } from '@/store/hooks';
// import { ApplyInfoState } from '@/store/feature/applyInfo';

const LastStep = () => {
  const router = useRouter();
  useEffect(() => router.prefetch('apply/complete'), [router]);

  const [isFinishPage, setIsFinishPage] = useState(false);
  const [checkboxState, setCheckboxState] = useState([false, false, false]);
  const onClickOathBox = (order: number) => {
    setCheckboxState(prev => {
      let newState = [...prev];
      newState[order] = !newState[order];
      return newState;
    });
  };

  useEffect(() => {
    checkboxState.includes(false)
      ? setIsFinishPage(false)
      : setIsFinishPage(true);
  }, [checkboxState]);

  return (
    <>
      <Col gap={32} padding="32px 24px 130px">
        <Col gap={12} align="center">
          <Text
            label="즐거운 시대팅을 위해 약속해주세요."
            size="base"
            weight={700}
            font="LeferiBaseType-RegularA"
            color="#3B4046"
          />
          <Col align="center">
            <Text
              label="매너있는 시대팅 문화를 위해"
              size="sm"
              weight={400}
              color="#656D78"
            />
            <Text
              label="몇 가지 주의사항을 읽어주세요."
              size="sm"
              weight={400}
              color="#656D78"
            />
          </Col>
        </Col>
        <Col gap={12} align="center">
          {OATH_PHRASES.map(pharase => (
            <OathBox
              key={pharase.order}
              title={pharase.title}
              desc={pharase.desc}
              highlight={pharase.highlight}
              isActive={checkboxState[pharase.order - 1]}
              onClick={() => onClickOathBox(pharase.order - 1)}
            />
          ))}
        </Col>
      </Col>
      <Footer maxPage={1} disabled={!isFinishPage} type={'lastStep'} />
    </>
  );
};

export default LastStep;
