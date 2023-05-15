'use client';

import { ApplyInfoState } from '@/store/feature/applyInfo';
import { useAppSelector } from '@/store/hooks';

import ProgressHeader from '@/components/header/progressHeader/ProgressHeader';

import FirstStep from '@/pages/personal/FirstStep';
import SecondStep from '@/pages/personal/SecondStep';
import ThirdStep from '@/pages/personal/ThirdStep';
import FourthStep from '@/pages/personal/FourthStep';
import FifthStep from '@/pages/personal/FifthStep';
import LastStep from '@/pages/common/LastStep';

const Personal = () => {
  const applyInfo = useAppSelector(state => state.applyInfo);
  console.log(applyInfo);

  const switchStep = (applyInfo: ApplyInfoState) => {
    switch (applyInfo.curStep) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <FourthStep />;
      case 5:
        return <FifthStep />;
      case 6:
        return <LastStep />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <ProgressHeader />
      {switchStep(applyInfo)}
    </>
  );
};

export default Personal;
