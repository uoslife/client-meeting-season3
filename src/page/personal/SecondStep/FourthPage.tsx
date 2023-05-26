'use client';

import { Button, Col, Text } from '@/components';
import useClickButton from '@/hooks/useClickButton';
import { setInfoQuestionPersonal } from '@/store/feature/meetingType/personalReducer';
import { useAppDispatch } from '@/store/store';
import { StepProps } from '@/types/step.type';
import Image from 'next/image';
import Image4 from 'public/images/illust/personal/4.jpg';
import { useEffect } from 'react';
import { useAppSelector } from '@/store/hooks';

function FourthPage({ setIsFinishPage }: StepProps) {
  const dispatch = useAppDispatch();
  const { info_question } = useAppSelector(state => state.personal);

  const questionArr = [
    '혼자만의 휴식 시간도 필요해요',
    '시간 날 때마다 함께 있고 싶어요',
  ];
  const [
    onClickQuestionButton,
    questionButtonActiveState,
    isClickedQuestion,
    question,
  ] = useClickButton(questionArr, 1, info_question);

  useEffect(() => {
    if (isClickedQuestion) {
      dispatch(setInfoQuestionPersonal({ label: question[0].label, order: 3 }));
      setIsFinishPage(true);
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
            label="Q4."
            size="xl"
            weight={800}
          />

          <Text
            as="p"
            color="#3B4046"
            font="LeferiBaseType-RegularA"
            label="연인과의 만남에 있어..."
            size="lg"
            weight={700}
          />
        </Col>

        <Image src={Image4} alt="" width={360} height={254} />
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

export default FourthPage;
