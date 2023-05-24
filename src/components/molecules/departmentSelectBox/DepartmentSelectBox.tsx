'use client';

import {
  Col,
  RoundedRectangleButton,
  Row,
  Text,
  TextRoundInput,
} from '@/components';
import { useState, Dispatch, SetStateAction } from 'react';
import useInput from '@/hooks/useInput';
import { DEPARTMENTS } from '@/constants/departments';

export type DepartmentSelectBoxProps = {
  isPersonal?: boolean;
  isDislike?: boolean;
  selectedDepartments?: string[];
  setSelectedDepartments?: Dispatch<SetStateAction<string[]>>;
};

const DepartmentSelectBox = ({
  isPersonal = false,
  isDislike = false,
  selectedDepartments,
  setSelectedDepartments,
}: DepartmentSelectBoxProps) => {
  const [searchText, handleSearchText, setSearchText] = useInput('');
  const [department, setDepartment] = useState<string[]>([]); // api 요청할 데이터

  const updateDepartment = (isAdd: boolean, item?: string, i?: number) => {
    return selectedDepartments!.filter((name, index) =>
      isAdd ? name !== item : index !== i,
    );
    // 학과를 추가하냐 삭제하냐애 따른 fiter 메서드 분기 처리
  };

  const searchDepartment = (val: string) => {
    const searchedResult = (text: string) =>
      DEPARTMENTS.filter(({ name }) => name.includes(text));
    // 검색 시, DEPARTMENTS 배열에서 searchText state에 맞는 정보 가져오기

    setDepartment([...department, searchedResult(val)[0].name]);
    setSearchText('');
  };

  const handleAddDepartment = (item: string) => () => {
    if (isPersonal && selectedDepartments?.length === 1) {
      setSelectedDepartments!(updateDepartment(true, item));
      setDepartment([]);
      return;
      // 학과 1개 선택 시,
    }
    setSelectedDepartments!([...selectedDepartments!, item]);
    setDepartment([]);
    // 학과 2개 이상 선택 시,
  };

  const handleDeleteDepartment = (item: string, i: number) => () => {
    if (selectedDepartments?.includes(item)) {
      setSelectedDepartments!(updateDepartment(false, item, i));
      setDepartment([]);
    }
  };

  return (
    <Col gap={24}>
      <Col gap={16}>
        <TextRoundInput
          placeholder={'학과명 입력 (2글자 이상)'}
          isSearch={true}
          value={searchText}
          onChange={handleSearchText}
          onClick={() => searchDepartment(searchText)}
        />
        {!!department[0] && (
          <RoundedRectangleButton
            fontSize={'sm'}
            type={'skyBlue'}
            label={department[0]}
            height={32}
            onClick={handleAddDepartment(department[0])}
          />
        )}
      </Col>
      <Col gap={14}>
        <Row gap={4}>
          <Text label={'선택된 학과'} weight={500} color={'#3B4046'} />
          <Text
            label={`(${selectedDepartments?.length.toString()}개)`}
            weight={500}
            color={'#80AAFF'}
          />
        </Row>
        <Row gap={8} style={{ flexWrap: 'wrap' }}>
          {!!selectedDepartments?.length &&
            selectedDepartments.map((name, i) => {
              return (
                <RoundedRectangleButton
                  fontSize={'sm'}
                  type={'red'}
                  deleteColor={isDislike ? 'red' : 'white'}
                  label={name}
                  height={32}
                  isDelete={true}
                  onClick={handleDeleteDepartment(name, i)}
                  key={i}
                />
              );
            })}
        </Row>
      </Col>
    </Col>
  );
};

export default DepartmentSelectBox;
