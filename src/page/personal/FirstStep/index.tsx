'use client';

import { useEffect, useState } from 'react';

import { Footer, Toast } from '@/components';

import { useAppSelector } from '@/store/hooks';
import { ApplyInfoState } from '@/store/feature/applyInfo';

import FirstPage from '@/page/common/applyMyInfoStep/FirstPage';
import SecondPage from '@/page/common/applyMyInfoStep/SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';

import { PERSONAL_MAX_PAGE_ARR } from '@/constants';

const MAX_PAGE = PERSONAL_MAX_PAGE_ARR[0];

const PersonalFirstStep = () => {
  const { curPage } = useAppSelector(state => state.applyInfo);

  const [isFinishPage, setIsFinishPage] = useState(false);

  /** 중복 선택시 안내 문구 추가*/
  const [isDoubleCheck, setIsDoubleCheck] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleDoubleCheckInfo = () => {
    if (!isDoubleCheck && curPage === 1) {
      setisModalOpen(true);
      setTimeout(() => {
        setisModalOpen(false);
      }, 5000);
    }
  };
  useEffect(() => {
    setIsDoubleCheck(false);
  }, [curPage]);

  const changePage = (curPage: ApplyInfoState['curPage']) => {
    switch (curPage) {
      case 1:
        return (
          <FirstPage
            setIsFinishPage={setIsFinishPage}
            setIsDoubleCheck={setIsDoubleCheck}
          />
        );
      case 2:
        return <SecondPage setIsFinishPage={setIsFinishPage} />;
      case 3:
        return <ThirdPage setIsFinishPage={setIsFinishPage} />;
      case 4:
        return <FourthPage setIsFinishPage={setIsFinishPage} />;
      case 5:
        return <FifthPage setIsFinishPage={setIsFinishPage} />;
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
        disabled={!isFinishPage}
        type={switchPageType()}
        handleDoubleCheckInfo={handleDoubleCheckInfo}
      />
      <Toast
        text={'닉네임 중복확인 후 진행해주세요'}
        isOpen={isModalOpen}
        isWarn
      />
    </>
  );
};

export default PersonalFirstStep;
