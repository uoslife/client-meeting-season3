'use client';

import { Button, Col, Row, Text } from '@/components';
import { Combine } from '@/types/utils.type';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

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
  const [isSelected, setIsSelected] = useState<string[]>([]);

  const handleUpdateType = (i: number) => () => {
    const updateType = [...value!];

    if (value?.includes(type![i])) {
      if (isPrefer) {
        const deleteType = value!.filter(val => val != type![i]);
        setValue!(deleteType);
      }

      const deleteIsSelected = isSelected!.filter(val => val != type![i]);
      setIsSelected(deleteIsSelected);
    }

    if (!value?.includes(type![i])) {
      isPrefer
        ? updateType!.push(type![i])
        : updateType!.splice(index!, 1, type![i]);

      setValue!(updateType);
      setIsSelected([...isSelected, type![i]]);
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
