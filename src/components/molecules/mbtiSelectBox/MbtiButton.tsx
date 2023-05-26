'use client';

import { Button, Col, Row, Text } from '@/components';
import { Combine } from '@/types/utils.type';
import { Dispatch, SetStateAction } from 'react';

export type MbtiSelectBoxProps = Combine<
  {
    title?: string;
    type?: string[];
    index?: number;
    description?: string[];
    isPrefer?: boolean;
    value?: string[];
    setValue?: Dispatch<SetStateAction<string[]>>;
  },
  React.ComponentProps<'button'>
>;

const MbtiSelectBox = ({
  title,
  type,
  description,
  index,
  isPrefer = true,
  value,
  setValue,
}: MbtiSelectBoxProps) => {
  const handleUpdateType = (i: number) => () => {
    const updateType = [...value!];

    if (value?.includes(type![i])) {
      // mbti 삭제 로직
      if (isPrefer) {
        // 상대방의 선호 mbti 선택 시, (복수 선택)
        const deleteType = value!.filter(val => val != type![i]);
        // 이미 눌러져 있는 버튼 한 번 더 클릭 시 filter 함수를 통해 값 제거
        setValue!(deleteType);
      }
    }

    if (!value?.includes(type![i])) {
      // mbti 추가 로직
      isPrefer
        ? updateType!.splice(index! + i, 0, type![i])
        : // 상대방의 선호 mbti 선택 시(복수 선택), 기존 배열에 클릭한 값 추가
          updateType!.splice(index!, 1, type![i]);
      // 나의 mbti 선택 시(1개 선택), 기존 배열 값 삭제하고 클릭한 값 추가

      setValue!(updateType);
    }
  };

  return (
    <Col fill gap={12}>
      <Text weight={600} size={'sm'} label={title!} color={'#808A98'} />
      <Row width={'full'} gap={32} justify={'center'}>
        {type?.map((item, i) => {
          return (
            <Button
              primary={value!.includes(item) ? 'active' : 'inactive'}
              label={''}
              key={i}
              onClick={handleUpdateType(i)}
            >
              <Row gap={8} align={'flex-end'}>
                <Text size={'4xl'} label={item} />
                <Text
                  size={'sm'}
                  weight={300}
                  label={description![i]}
                  style={{ padding: '0 0 10px 0' }}
                />
              </Row>
            </Button>
          );
        })}
      </Row>
    </Col>
  );
};
export default MbtiSelectBox;
