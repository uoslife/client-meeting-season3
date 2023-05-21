'use client';

import { ApplyInfoState } from '@/store/feature/applyInfo';
import { useAppSelector } from '@/store/hooks';

import FirstStep from '@/page/personal/FirstStep';
import SecondStep from '@/page/personal/SecondStep';
import ThirdStep from '@/page/personal/ThirdStep';
import FourthStep from '@/page/personal/FourthStep';
import FifthStep from '@/page/personal/FifthStep';
import LastStep from '@/page/common/LastStep';

const Personal = () => {
  const applyInfo = useAppSelector(state => state.applyInfo);

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

  return <>{switchStep(applyInfo)}</>;
};

export default Personal;
