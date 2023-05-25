import { StepProps } from '@/types/step.type';
import { Button, Col, DepartmentSelectBox, Text } from '@/components';
import { colors } from '@/styles/styles';
import { useEffect, useState } from 'react';

const SecondPage = ({ setIsFinishPage }: StepProps) => {
  const smokeArr = ['흡연', '비흡연', '상관 없어요!'];
  const [dislikeDepartmentValue, setDislikeDepartmentValue] = useState<
    string[]
  >([]);
  const [smokeValue, setSmokeValue] = useState<string>('');

  const handleSmokeValue = (item: string) => () => setSmokeValue(item);

  useEffect(() => {
    if (!!smokeValue && !!dislikeDepartmentValue) setIsFinishPage(true);
  });
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
          {smokeArr.map((item, i) => (
            <Button
              key={i}
              primary={smokeValue === item ? 'active' : 'inactive'}
              label={item}
              onClick={handleSmokeValue(item)}
            />
          ))}
        </Col>
      </Col>
    </Col>
  );
};

export default SecondPage;
