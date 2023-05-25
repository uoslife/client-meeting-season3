import { Button, Col, Paddle, Row, Text } from '@/components';
import useClickButton from '@/hooks/useClickButton';
import { StepProps } from '@/types/step.type';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setInfoPreferDay } from '@/store/feature/meetingType/groupReducer';

const FirstPage = ({ setIsFinishPage }: StepProps) => {
  const dispatch = useAppDispatch();
  const { info_preferDay } = useAppSelector(state => state.group);
  const buttonLabelArr = ['월', '화', '수', '목', '금', '토', '일'];

  const [onClickButton, buttonActiveState, isClickedButton, selectedLabel] =
    useClickButton(buttonLabelArr, 7, info_preferDay);

  useEffect(() => {
    if (isClickedButton) {
      const dispatchPreferDay = selectedLabel.map(item => item.label);
      dispatch(setInfoPreferDay(dispatchPreferDay ?? ['']));
      setIsFinishPage(true);
    } else setIsFinishPage(false);
  }, [isClickedButton, selectedLabel, setIsFinishPage]);

  return (
    <Paddle top={32} left={24} right={24}>
      <Col gap={56}>
        <Col gap={32} align={'center'}>
          <Col align={'center'} gap={12}>
            <Text label={'선호하는 미팅 요일은 언제인가요?'} weight={700} />
            <Text
              label={
                '(최소 2개 이상 선택해야 하며 요일을 많이 선택할수록 \n원하는 상대와의 매칭 확률이 높아집니다.)'
              }
              size="sm"
              color="#656D78"
            />
          </Col>
          <Row gap={5} width="full">
            {buttonLabelArr.map((label, i) => (
              <Button
                key={i}
                label={label}
                primary={buttonActiveState(i) ? 'active' : 'inactive'}
                height={48}
                textSize="lg"
                onClick={() => onClickButton(i)}
              />
            ))}
          </Row>
        </Col>
      </Col>
    </Paddle>
  );
};
export default FirstPage;
