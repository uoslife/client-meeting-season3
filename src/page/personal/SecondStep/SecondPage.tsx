'use client';

import { Button, Col, Text } from '@/components';
import useClickButton from '@/hooks/useClickButton';
import { setInfoQuestion } from '@/store/feature/meetingType/personalReducer';
import { useAppDispatch } from '@/store/store';
import { StepProps } from '@/types/step.type';
import Image from 'next/image';
import Image2 from 'public/images/illust/personal/2.jpg';
import { useEffect } from 'react';

function SecondPage({ setIsFinishPage }: StepProps) {
  const dispatch = useAppDispatch();

  const questionArr = [
    '그 자리에서 바로 풀어야 해요',
    '시간을 두고 천천히 풀고 싶어요',
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
      dispatch(setInfoQuestion({ label: question[0].label, order: 1 }));
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
            label="Q2."
            size="xl"
            weight={800}
          />

          <Text
            as="p"
            color="#3B4046"
            font="LeferiBaseType-RegularA"
            label="연인과 싸웠을 때 나는..."
            size="lg"
            weight={700}
          />
        </Col>

        <Image src={Image2} alt="" width={360} height={256} />
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

export default SecondPage;
