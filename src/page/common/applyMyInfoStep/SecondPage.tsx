'use client';

import {
  Button,
  Col,
  DepartmentSelectBox,
  Paddle,
  Text,
  TextRoundInput,
} from '@/components';
import useClickButton from '@/hooks/useClickButton';
import useInput from '@/hooks/useInput';
import { StepProps } from '@/types/step.type';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/store';
import {
  setInfoKakaoId,
  setInfoMajor,
  setInfoSmoking,
  setInfoStudentType,
} from '@/store/feature/common/commonReducer';

const SecondPage = ({ setIsFinishPage }: StepProps) => {
  const dispatch = useAppDispatch();
  const { info_kakaoId, info_major, info_studentType, info_smoking } =
    useAppSelector(state => state.common);

  const [kakaoId, onChangeKakaoId] = useInput(info_kakaoId.data ?? '');
  const [myDepartment, setMyDepartment] = useState<string[]>(
    info_major.data ? [info_major.data] : [],
  );
  const studentTypeArr = ['학부생', '대학원생', '졸업생'];
  const [
    onClickStudentTypeButton,
    studentTypeButtonActiveState,
    isClickedStudentType,
    studentType,
  ] = useClickButton(studentTypeArr, 1, info_studentType);

  const smokingArr = ['흡연', '비흡연'];
  const [
    onClickSmokingButton,
    smokingButtonActiveState,
    isClickedSmoking,
    smoking,
  ] = useClickButton(smokingArr, 1, info_smoking);

  useEffect(() => {
    const isSubmitKakaoId = kakaoId !== '';
    if (isSubmitKakaoId) dispatch(setInfoKakaoId(kakaoId));
    else dispatch(setInfoKakaoId(''));

    if (myDepartment[0]) dispatch(setInfoMajor(myDepartment[0]));
    else dispatch(setInfoMajor(''));

    if (isClickedStudentType)
      dispatch(setInfoStudentType(studentType[0].label));

    if (isClickedSmoking) dispatch(setInfoSmoking(smoking[0].label));
    if (
      myDepartment[0] &&
      isSubmitKakaoId &&
      isClickedStudentType &&
      isClickedSmoking
    ) {
      setIsFinishPage(true);
    } else setIsFinishPage(false);
  }, [
    dispatch,
    isClickedSmoking,
    isClickedStudentType,
    kakaoId,
    setIsFinishPage,
    myDepartment,
    smoking,
    studentType,
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
                color="#3B4046"
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
                color="#3B4046"
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
                color="#3B4046"
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
                textSize="base"
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
