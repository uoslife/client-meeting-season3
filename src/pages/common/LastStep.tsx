import { useState } from 'react';

import { Footer } from '@/components';

// import { useAppSelector } from '@/store/hooks';
// import { ApplyInfoState } from '@/store/feature/applyInfo';

const LastStep = () => {
  const [isFinishPage, setIsFinishPage] = useState(false);

  return (
    <>
      <Footer maxPage={1} disabled={isFinishPage} type={'lastStep'} />
    </>
  );
};

export default LastStep;
