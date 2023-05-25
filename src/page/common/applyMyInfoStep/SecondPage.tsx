'use client';

import {
  Button,
  Col,
  DepartmentSelectBox,
  Paddle,
  RoundedRectangleButton,
  Row,
  Text,
  TextRoundInput,
} from '@/components';
import { DropdownInput } from '@/components';
import useClickButton from '@/hooks/useClickButton';
import useInput from '@/hooks/useInput';
import { StepProps } from '@/types/step.type';
import { useEffect, useState } from 'react';

const SecondPage = ({ setIsFinishPage }: StepProps) => {
  const [kakaoId, onChangeKakaoId] = useInput('');
  const [myDepartment, setMyDepartment] = useState<string[]>([]);
  const studentTypeArr = ['학부생', '대학원생', '졸업생'];
  const [
    onClickStudentTypeButton,
    studentTypeButtonActiveState,
    isClickedStudentType,
    studentType,
  ] = useClickButton(studentTypeArr);

  const smokingArr = ['흡연', '비흡연'];
  const [
    onClickSmokingButton,
    smokingButtonActiveState,
    isClickedSmoking,
    smoking,
  ] = useClickButton(smokingArr);

  useEffect(() => {
    const isSubmitKakaoId = kakaoId !== '';
    if (
      myDepartment.length === 1 &&
      isSubmitKakaoId &&
      isClickedStudentType &&
      isClickedSmoking
    ) {
      setIsFinishPage(true);
    } else setIsFinishPage(false);
  }, [
    isClickedSmoking,
    isClickedStudentType,
    kakaoId,
    setIsFinishPage,
    myDepartment,
  ]);
  return (
    <>
      <Paddle top={32} left={24} right={24} bottom={32}>
        <Col gap={56} align="center">
          <Col gap={32} align="center">
            <Col gap={12} align="center">
              <Text
                label={'4. 본인의 카카오톡 ID를 선택해주세요.'}
                weight={700}
                font="LeferiBaseType-RegularA"
              />
              <Text
                label={
                  '매칭 이후 상대와 연락할 수 있는 수단으로 활용됩니다. \n카카오톡 [설정]-[프로필 관리]-[카카오톡 ID]에서 \nID 검색 허용이 되어있는지 확인해주세요.'
                }
                weight={400}
                size="sm"
                color="#2E74FF"
              />
            </Col>
            <TextRoundInput
              placeholder={'카카오톡 ID 입력'}
              value={kakaoId}
              onChange={onChangeKakaoId}
            />
          </Col>

          <Col gap={32} align="center">
            <Col gap={12} align="center">
              <Text
                label={'5. 본인의 학과를 선택해주세요.'}
                weight={700}
                font="LeferiBaseType-RegularA"
              />
            </Col>
            <DepartmentSelectBox
              setSelectedDepartments={setMyDepartment}
              selectedDepartments={myDepartment}
              isPersonal={true}
              isDislike={false}
            />
          </Col>

          <Col gap={32} align="center">
            <Col gap={12} align="center">
              <Text
                label={'6. 본인의 신분을 선택해주세요.'}
                weight={700}
                font="LeferiBaseType-RegularA"
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
                  textSize="sm"
                  onClick={() => onClickStudentTypeButton(i)}
                />
              ))}
            </Col>
          </Col>
        </Col>
      </Paddle>

      {/* footer와 겹침 문제: bottom에 padding 임시방편 */}

      <Paddle top={32} left={24} right={24} bottom={100}>
        <Col gap={32} align="center">
          <Col gap={12} align="center">
            <Text
              label={'7. 흡연 여부를 선택해주세요.'}
              weight={700}
              font="LeferiBaseType-RegularA"
            />
          </Col>
          <Col gap={12}>
            {smokingArr.map((label, i) => (
              <Button
                key={i}
                label={label}
                primary={smokingButtonActiveState(i) ? 'active' : 'inactive'}
                textSize="sm"
                onClick={() => onClickSmokingButton(i)}
              />
            ))}
          </Col>
        </Col>
      </Paddle>
    </>
  );
};

export default SecondPage;
