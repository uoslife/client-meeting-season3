'use client';

import * as S from './RoundedRectangleButton.style';
import { DeleteButton, Row, Text } from '@/components';
import { SizeTypes } from '@/types/styles.type';
import { Combine } from '@/types/utils.type';

export type RoundedRectangleButtonProps = Combine<
  {
    type?: 'primary' | 'skyBlue';
    label: string;
    height?: number;
    fontSize?: SizeTypes;
    isDelete?: boolean;
    onClick?: () => void;
  },
  React.ComponentProps<'div'>
>;

const RoundedRectangleButton = ({
  type = 'primary',
  label,
  height = 56,
  fontSize = 'base',
  isDelete = false,
  onClick,
  ...props
}: RoundedRectangleButtonProps) => {
  return (
    <S.Wrapper type={type} height={height} onClick={onClick} {...props}>
      <Row justify={'center'} align={'center'} gap={6.5}>
        {isDelete && <DeleteButton type={'white'} width={8} height={8} />}
        <Text label={label} weight={600} size={fontSize} />
      </Row>
    </S.Wrapper>
  );
};
export default RoundedRectangleButton;
