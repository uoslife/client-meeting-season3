'use client';

import { Button, Col, Text } from '@/components';
import useClickButton from '@/hooks/useClickButton';
import { setInfoQuestion } from '@/store/feature/meetingType/personalReducer';
import { useAppDispatch } from '@/store/store';
import { StepProps } from '@/types/step.type';
import Image from 'next/image';
import Image3 from 'public/images/illust/personal/3.jpg';
import { useEffect } from 'react';

function ThirdPage({ setIsFinishPage }: StepProps) {
  const dispatch = useAppDispatch();

  const questionArr = [
    '시시콜콜 자주 연락하고 싶어요',
    '서로 편한 시간에 연락하고 싶어요',
  ];
  const [
    onClickQuestionButton,
    questionButtonActiveState,
    isClickedQuestion,
    question,
  ] = useClickButton(questionArr, 1);

  useEffect(() => {
    if (isClickedQuestion) {
      setIsFinishPage(true);
      dispatch(setInfoQuestion({ label: question[0].label, order: 2 }));
    } else setIsFinishPage(false);
  }, [dispatch, isClickedQuestion, question, setIsFinishPage]);

  return (
    <Col fill align="center">
      <Col gap={32} align="center" padding="32px 24px 32px 24px">
        <Col gap={8} align="center">
          <Text
            as="p"
            color="#4C89FF"
            font="LeferiBaseType-RegularA"
            label="Q3."
            size="xl"
            weight={800}
          />

          <Text
            as="p"
            color="#3B4046"
            font="LeferiBaseType-RegularA"
            label="나는 연락 빈도가..."
            size="lg"
            weight={700}
          />
        </Col>

        <Image src={Image3} alt="" width={360} height={280} />
        <Col gap={12}>
          {questionArr.map((label, i) => (
            <Button
              height={56}
              key={i}
              label={label}
              primary={questionButtonActiveState(i) ? 'active' : 'inactive'}
              textSize="sm"
              onClick={() => onClickQuestionButton(i)}
            />
          ))}
        </Col>
      </Col>
    </Col>
  );
}

export default ThirdPage;
