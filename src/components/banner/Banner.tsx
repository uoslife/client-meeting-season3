import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Container = styled.div`
  max-width: 414px;
  position: relative;
`;

const Banner = () => {
  const images = ['test.jpeg', 'MainPoster.jpg'];
  const [imageNum, setImageNum] = useState(0);

  const handleSwitchNum = () => {};

  useEffect(() => {
    setInterval(() => {}, 3000);
  });
  // 광고 객체 받아오기
  return (
    <Container>
      <Image
        src={`/images/${images[imageNum]}`}
        alt={''}
        width={414}
        height={100}
      />
    </Container>
  );
};

export default Banner;
