'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  Button,
  Col,
  Paddle,
  RoundedRectangleButton,
  Row,
  Text,
  TextRoundInput,
} from '@/components';
import { DropdownInput } from '@/components';

import { StepProps } from '@/types/step.type';
import useClickButton from '@/hooks/useClickButton';
import { AGE_ARR, HEIGHT_ARR } from '@/constants';

import {
  setInfoNickname,
  setInfoGender,
  setInfoAge,
  setInfoHeight,
} from '@/store/feature/common/commonReducer';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { meetingAPI } from '@/api';

const buttonLabelArr = ['남자', '여자'];

const FirstPage = ({
  setIsFinishPage,
  setIsDoubleCheck,
}: StepProps & { setIsDoubleCheck: Dispatch<SetStateAction<boolean>> }) => {
  const { info_nickname, info_gender, info_age, info_height } = useAppSelector(
    state => state.common,
  );

  const dispatch = useAppDispatch();

  const [currentNicknameStatus, setCurrentNicknameStatus] = useState<
    'success' | 'error' | 'default'
  >('default');
  const [nicknameStatusMessage, setNicknameStatusMessage] = useState('');
  const [nickname, setNickname] = useState(info_nickname.data ?? '');
  const [isFinishNickname, setIsFinishNickname] = useState(false);

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    //reset
    setCurrentNicknameStatus('default');
    setNicknameStatusMessage('');
    dispatch(setInfoNickname('')); // 매번 호출되는 side effect..
    setIsDoubleCheck(false); //
    //set
    setNickname(e.target.value);
    setIsFinishNickname(false);
  };

  const handleDoubleCheckButton = () => {
    meetingAPI.duplicateCheck({ nickname }).then(res => {
      if (res.data.duplicated) {
        setCurrentNicknameStatus('error');
        setNicknameStatusMessage('이미 존재하는 닉네임입니다.');
        setIsFinishNickname(false);
        setIsDoubleCheck(false); //
      } else {
        setCurrentNicknameStatus('success');
        setNicknameStatusMessage('사용 가능한 닉네임입니다.');
        setIsFinishNickname(true);
        setIsDoubleCheck(true); //
        dispatch(setInfoNickname(nickname));
      }
    });
  };

  //gender
  const [onClickButton, buttonActiveState, isClickedButton, selectedLabel] =
    useClickButton(buttonLabelArr, 1, info_gender);

  //age
  const [age, setAge] = useState<string | number>(info_age.data ?? 0);

  //height
  const [height, setHeight] = useState<string | number>(info_height.data ?? 0);

  useEffect(() => {
    const isClickAge = age !== 0;
    const isClickHeight = height !== 0;
    if (isClickedButton) dispatch(setInfoGender(selectedLabel[0].label));
    if (isClickAge) dispatch(setInfoAge(age as number));
    if (isClickHeight) dispatch(setInfoHeight(height as number));
    if (isFinishNickname && isClickedButton && isClickAge && isClickHeight) {
      setIsFinishPage(true);
    } else setIsFinishPage(false);
  }, [
    age,
    dispatch,
    height,
    isClickedButton,
    isFinishNickname,
    selectedLabel,
    setIsFinishPage,
  ]);

  return (
    <Paddle top={32} left={24} right={24} bottom={140}>
      <Col gap={32} align="center">
        <Col gap={12} align="center">
          <Text
            label={'본인의 닉네임을 정해주세요.'}
            weight={700}
            font="LeferiBaseType-RegularA"
          />
          <Text
            label={
              '지금부터 입력하는 정보는 매칭된 상대에게 공개됩니다. \n욕설 및 비하 단어는 삼가 주세요.'
            }
            weight={400}
            size="sm"
            color="#2E74FF"
          />
        </Col>
        <Row gap={8} width="full">
          {/* placeholder 설정 필요 */}
          <TextRoundInput
            placeholder={'닉네임 입력 (2글자 이상)'}
            value={nickname as string}
            status={currentNicknameStatus}
            statusMessage={nicknameStatusMessage}
            onChange={onChangeNickname}
          />
          {/* font-size가 분명 16으로 되어있기는 한데 피그마랑 미묘하게 다른느낌.. */}
          <RoundedRectangleButton
            label="중복확인"
            height={48}
            type="skyBlue"
            onClick={handleDoubleCheckButton}
          />
        </Row>
        <Text
          label={'1. 본인의 성별을 선택해주세요.'}
          weight={700}
          font="LeferiBaseType-RegularA"
        />
        <Col gap={12}>
          {buttonLabelArr.map((label, i) => (
            <Button
              key={i}
              label={label}
              primary={buttonActiveState(i) ? 'active' : 'inactive'}
              textSize="base"
              onClick={() => onClickButton(i)}
            />
          ))}
        </Col>
        <Text
          label={'2. 본인의 나이를 선택해주세요.'}
          weight={700}
          font="LeferiBaseType-RegularA"
        />
        <DropdownInput
          label="나이 선택"
          value={age}
          setValue={setAge}
          options={AGE_ARR}
        />
        <Text
          label={'3. 본인의 키를 선택해주세요.'}
          weight={700}
          font="LeferiBaseType-RegularA"
        />
        <DropdownInput
          label="키 선택"
          value={height}
          setValue={setHeight}
          options={HEIGHT_ARR}
        />
      </Col>
    </Paddle>
  );
};

export default FirstPage;
