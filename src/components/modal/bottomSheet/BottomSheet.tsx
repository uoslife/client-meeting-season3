'use client';

import * as S from './BottomSheet.style';
import { Col, IconButton, Row, Text } from '@/components';
import { Combine } from '@/types/utils.type';

export type BottomSheetProps = Combine<
  {
    isActive?: boolean;
    title?: string;
    subTitle?: string;
    current?: number;
    description?: string;
    secondaryWord?: string;
    primaryWord?: string;
    onClickSecondary?: () => void;
    onClickPrimary?: () => void;
    type?: 'primary' | 'white';
  },
  React.ComponentProps<'button'>
>;

const BottomSheet = ({
  isActive,
  title,
  subTitle,
  current,
  description,
  secondaryWord,
  primaryWord,
  onClickSecondary,
  onClickPrimary,
}: BottomSheetProps) => {
  return !!isActive ? (
    <S.SheetLayout>
      <S.Sheet>
        <Col gap={16} align={'center'}>
          <S.GrayHandler></S.GrayHandler>
          <Col align={'center'} gap={8}>
            <S.SubTitle>{subTitle}</S.SubTitle>
            <S.HighlightedBold>&ldquo;{title}&rdquo;</S.HighlightedBold>
            {!!current && (
              <Row gap={8} justify={'center'} align={'center'}>
                <IconButton iconName="Person" width={13} height={13} />
                <Text label={`${current} / 3`} color={'#808A98'} />
              </Row>
            )}
          </Col>
          <S.DivLine></S.DivLine>
          <Text label={description!} color={'#808A98'} />
          <Row gap={12} justify={'center'} style={{ marginTop: '16px' }}>
            <S.Button onClick={onClickSecondary} type={'white'}>
              <Text size={'lg'} weight={600} label={secondaryWord!} />
            </S.Button>
            <S.Button onClick={onClickPrimary} type={'primary'}>
              <Text size={'lg'} weight={600} label={primaryWord!} />
            </S.Button>
          </Row>
        </Col>
      </S.Sheet>
    </S.SheetLayout>
  ) : null;
};

export default BottomSheet;
