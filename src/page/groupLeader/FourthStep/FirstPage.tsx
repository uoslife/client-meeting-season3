'use client';

import {
  Paddle,
  Col,
  Text,
  Button,
  DropdownInput,
  Slider,
  DepartmentSelectBox,
} from '@/components';
import { AGE_SLIDER_ARR } from '@/constants';

import useClickButton from '@/hooks/useClickButton';
import { StepProps } from '@/types/step.type';
import { useEffect, useState } from 'react';

const FirstPage = ({ setIsFinishPage }: StepProps) => {
  const [value, setValue] = useState({ min: 0, max: 100 });

  const buttonLabelArr = ['활발한 편', '차분한 편', '둘 다 좋아요!'];
  const [onClickButton, buttonActiveState, isClickedButton, selectedLabel] =
    useClickButton(buttonLabelArr);

  useEffect(() => {
    if (isClickedButton) {
      // selectedLabel 사용한 전역 저장 로직
      setIsFinishPage(true);
    } else setIsFinishPage(false);
  }, [isClickedButton, selectedLabel, setIsFinishPage]);

  return (
    <Paddle top={32} left={24} right={24}>
      <Col gap={56} align={'center'}>
        <Col gap={32} align={'center'}>
          <Text
            label={'1. 만나고 싶은 팅원들의 평균 나이를 선택해주세요.'}
            weight={700}
            font="LeferiBaseType-RegularA"
            color="#3B4046"
          />
          {/* DropdownInput 글자 수정 필요 */}
          <Slider
            guideText={AGE_SLIDER_ARR}
            labelExplain="세"
            min={0}
            max={100}
            step={10}
            value={value}
            onChange={setValue}
          />
        </Col>
        <Col gap={12} align={'center'}>
          <Text
            label={'2. 매칭을 원하지 않는 학과를 입력해주세요.'}
            weight={700}
            font="LeferiBaseType-RegularA"
            color="#3B4046"
          />
          {/* Figma랑 맞게 폰트 넣었는데 뭔가 많이 깨집니다.. 확인 부탁드려요오.. */}
          <Text
            label={
              '(단, 상대 팅원 모두가 입력한 학과에 해당할 경우에만 매칭되지 않습니다.)'
            }
            weight={400}
            size="xs"
            color="#2E74FF"
          />
          <Text
            label={
              '매칭을 원하지 않는 학과가 없다면 바로 넘어갈 수 있으며, 많은 학과를 선택할수록 원하는 팅과의 매칭 성공 확률이 떨어질 수 있습니다.'
            }
            size="sm"
            color="#656D78"
          />

          <DepartmentSelectBox
            selectedDepartments={dislikeDepartment}
            setSelectedDepartments={setDislikeDepartment}
            isDislike={true}
          />
        </Col>
        <Col gap={32} align={'center'}>
          <Text
            label={'3. 선호하는 상대 팅의 분위기를 선택해주세요.'}
            weight={700}
            font="LeferiBaseType-RegularA"
            color="#3B4046"
          />
          <Paddle bottom={100}>
            <Col gap={12} align="center">
              {buttonLabelArr.map((label, i) => (
                <Button
                  key={i}
                  label={label}
                  primary={buttonActiveState(i) ? 'active' : 'inactive'}
                  textSize="sm"
                  onClick={() => onClickButton(i)}
                />
              ))}
            </Col>
          </Paddle>
        </Col>
      </Col>
    </Paddle>
  );
};
export default FirstPage;
