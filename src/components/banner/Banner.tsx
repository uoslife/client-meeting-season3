import Image from 'next/image';
import { Combine } from '@/types/utils.type';
import * as S from './banner.style';

export type BannerProps = Combine<
  {
    link?: 'MmedAdvertise.jpg';
    url?: string;
    width?: number;
    height?: number;
  },
  React.ComponentProps<'div'>
>;

const Banner = ({ link, url, width = 414, height = 94 }) => {
  return (
    <S.Container width={width} height={height}>
      <a href={url} target={'_blank'}>
        <Image src={`/images/banner/${link}`} alt={''} fill />
      </a>
    </S.Container>
  );
};

export default Banner;
