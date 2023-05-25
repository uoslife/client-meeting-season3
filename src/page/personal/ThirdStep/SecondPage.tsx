import { StepProps } from '@/types/step.type';
import { Button, Col, DepartmentSelectBox, Text } from '@/components';
import { colors } from '@/styles/styles';
import { useEffect, useState } from 'react';
import {
  setPreferMajorPersonal,
  setPreferSmoking,
} from '@/store/feature/meetingType/personalReducer';
import { useAppDispatch } from '@/store/store';
import useClickButton from '@/hooks/useClickButton';

const SecondPage = ({ setIsFinishPage }: StepProps) => {
  const dispatch = useAppDispatch();

  const [dislikeDepartmentValue, setDislikeDepartmentValue] = useState<
    string[]
  >([]);

  const smokingArr = ['흡연', '비흡연', '상관 없어요!'];
  const [
    onClickSmokingButton,
    smokingButtonActiveState,
    isClickedSmoking,
    smoking,
  ] = useClickButton(smokingArr, 1);

  useEffect(() => {
    if (dislikeDepartmentValue[0])
      dispatch(setPreferMajorPersonal(dislikeDepartmentValue));
    else dispatch(setPreferMajorPersonal(['']));

    if (isClickedSmoking) {
      dispatch(setPreferSmoking(smoking[0].label));
      setIsFinishPage(true);
    } else setIsFinishPage(false);
  }, [
    dislikeDepartmentValue,
    dispatch,
    isClickedSmoking,
    setIsFinishPage,
    smoking,
  ]);

  return (
    <Col gap={44} padding={'32px 24px'}>
      <Col align={'center'} gap={12}>
        <Text
          label={'4. 매칭을 원하지 않는 학과를 입력해주세요.'}
          weight={700}
          font={'LeferiBaseType-RegularA'}
        />
        <Text
          label={
            '매칭을 원하지 않는 학과가 없다면 바로 넘어갈 수 있으며 \n 최대 5개까지 입력이 가능합니다.'
          }
          size={'sm'}
          color={colors.Secondary800}
        />
      </Col>
      <DepartmentSelectBox
        isPersonal={false}
        isDislike={true}
        selectedDepartments={dislikeDepartmentValue}
        setSelectedDepartments={setDislikeDepartmentValue}
      />
      <Col align={'center'} gap={32}>
        <Text
          label={'5. 선호하는 상대의 흡연 여부를 선택해주세요.'}
          weight={700}
          font={'LeferiBaseType-RegularA'}
        />
        <Col gap={12}>
          {/* {smokeArr.map((item, i) => (
            <Button
              key={i}
              primary={smokeValue === item ? 'active' : 'inactive'}
              label={item}
              onClick={handleSmokeValue(item)}
            />
          ))} */}
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
    </Col>
  );
};

export default SecondPage;
