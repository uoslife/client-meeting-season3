import { Text, Col, Button, Slider } from '@/components';
import { AGE_SLIDER_ARR, HEIGHT_SLIDER_ARR } from '@/constants';
import useClickButton from '@/hooks/useClickButton';
import {
  setPreferAgePersonal,
  setPreferHeight,
  setPreferStudentType,
} from '@/store/feature/meetingType/personalReducer';
import { useAppDispatch } from '@/store/store';
import { StepProps } from '@/types/step.type';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/store/hooks';

const FirstPage = ({ setIsFinishPage }: StepProps) => {
  const dispatch = useAppDispatch();
  const { prefer_age, prefer_height, prefer_studentType } = useAppSelector(
    state => state.personal,
  );
  const [age, setAge] = useState({ min: 0, max: 100 });
  // 전역 저장 불러오기 필요
  const [height, setHeight] = useState({ min: 0, max: 80 });
  // 전역 저장 불러오기 필요

  const studentTypeArr = ['학부생', '대학원생', '졸업생'];
  const [
    onClickStudentTypeButton,
    studentTypeButtonActiveState,
    isClickedStudentType,
    studentType,
  ] = useClickButton(studentTypeArr, 1, prefer_studentType);

  useEffect(() => {
    console.log(prefer_age.data);
    const ageArr = [AGE_SLIDER_ARR[age.min / 10], AGE_SLIDER_ARR[age.max / 10]];
    const heightArr = [
      HEIGHT_SLIDER_ARR[height.min / 10],
      HEIGHT_SLIDER_ARR[height.max / 10],
    ];
    dispatch(setPreferAgePersonal(ageArr));
    dispatch(setPreferHeight(heightArr));
    if (isClickedStudentType)
      dispatch(setPreferStudentType(studentType[0].label));

    if (isClickedStudentType) setIsFinishPage(true);
    else setIsFinishPage(false);
  }, [
    age.max,
    age.min,
    dispatch,
    height.max,
    height.min,
    isClickedStudentType,
    setIsFinishPage,
    studentType,
  ]);

  return (
    <>
      <Col gap={56} padding="32px 24px 120px" align="center">
        <Col gap={32} align="center">
          <Text
            label={'1. 선호하는 상대의 나이를 선택해주세요.'}
            weight={700}
            font="LeferiBaseType-RegularA"
            color="#3B4046"
          />
          <Slider
            guideText={AGE_SLIDER_ARR}
            labelExplain="세"
            min={0}
            max={100}
            step={10}
            value={age}
            onChange={setAge}
          />
        </Col>
        <Col gap={32} align="center">
          <Text
            label={'2. 선호하는 상대의 키를 선택해주세요.'}
            weight={700}
            font="LeferiBaseType-RegularA"
            color="#3B4046"
          />
          <Slider
            guideText={HEIGHT_SLIDER_ARR}
            labelExplain=" (cm)"
            min={0}
            max={80}
            step={10}
            value={height}
            onChange={setHeight}
          />
        </Col>
        <Col gap={32}>
          <Col gap={12} align="center">
            <Text
              label={'3. 선호하는 상대의 신분을 선택해주세요.'}
              weight={700}
              font="LeferiBaseType-RegularA"
              color="#3B4046"
            />
            <Text
              label="복수 선택이 가능하며 무관한 경우 모두 선택해주세요."
              size="sm"
              color="#656D78"
            />
          </Col>
          <Col gap={12}>
            {studentTypeArr.map((label, i) => (
              <Button
                key={i}
                label={label}
                primary={
                  studentTypeButtonActiveState(i) ? 'active' : 'inactive'
                }
                textSize="base"
                onClick={() => onClickStudentTypeButton(i)}
              />
            ))}
          </Col>
        </Col>
      </Col>
    </>
  );
};

export default FirstPage;
