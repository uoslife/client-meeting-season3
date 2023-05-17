import { useState } from 'react';

import { Footer, ProgressHeader } from '@/components';

import { useAppSelector } from '@/store/hooks';
import { ApplyInfoState } from '@/store/feature/applyInfo';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

const MAX_PAGE = 2;

const GroupFirstStep = () => {
  const { curPage } = useAppSelector(state => state.applyInfo);

  const [isFinishPage, setIsFinishPage] = useState(false);

  const changePage = (curPage: ApplyInfoState['curPage']) => {
    switch (curPage) {
      case 1:
        return <FirstPage setIsFinishPage={setIsFinishPage} />;
      case 2:
        return <SecondPage setIsFinishPage={setIsFinishPage} />;
      default:
        return <></>;
    }
  };

  const switchPageType = () => {
    switch (curPage) {
      case 1:
        return 'firstPage';
      case MAX_PAGE:
        return 'lastPage';
      default:
        return;
    }
  };
  return (
    <>
      {changePage(curPage)}
      <Footer
        maxPage={MAX_PAGE}
        disabled={isFinishPage}
        type={switchPageType()}
      />
    </>
  );
};

export default GroupFirstStep;
