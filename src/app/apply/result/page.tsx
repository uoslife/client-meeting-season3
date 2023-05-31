'use client';

import { Button, Col, ResultBox, TeamResultBox, Text } from '@/components';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { ApplyDataArr } from '@/types/apply.type';


const ConfirmPage = () => {
  const commonState = useAppSelector(state => state.common);
  const { curStep, meetingType } = useAppSelector(state => state.applyInfo);
  const personalState = useAppSelector(state => state.personal);
  const isPersonal = meetingType === 'personal';
  const onClickGuide = () => {
    // TODO: 가이드 페이지로 이동
  };
  
  const applyInfoDataArr: ApplyDataArr = (
    Object.values(commonState) as ApplyDataArr
  ).concat(Object.values(personalState).filter(data => data.type === 'info'));

  const applyPreferDataArr: ApplyDataArr = Object.values(personalState).filter(
    data => data.type === 'prefer',
  );

  return (
    <>
      <Col padding="24px" gap={85}>
        <Col gap={12}>
          <Col align={'center'}>
            <Text label="🎉호랑이 님, 성공적으로 매칭되었어요!"  
              size="xl"
              color="#3B4046"
              weight={800} 
            />
            <Text
              label="상대와의 카톡방을 만들어 대화를 시작해보세요."
              weight={400}
              size={'sm'}
              color="#656D78"
            />
          </Col>
          {!isPersonal ? (
            <TeamResultBox
              teamName={'건공관 지박령개인'}
              type={'confirm'}
              status={'complete'}
            />
          ) : (
            <TeamResultBox
              teamName={'건공관 지박령팀'}
              type={'confirm'}
              status={'complete'}
            />
          )}
          { isPersonal ? (
            <ResultBox title={'상대의 정보'} applyDataArr={applyInfoDataArr} />
          ) : (
            <ResultBox title={'상대 팅의 정보'} applyDataArr={applyPreferDataArr} />
          )
        }
        </Col>
        <Col gap={10}>
          <Button
            primary={'active'}
            textSize="sm"
            onClick={onClickGuide}
            label={'시대팅 안내 사항 보러가기'}
          />
        </Col>
      </Col>
    </>
  );
};
export default ConfirmPage;
