'use client';

import { ApplyInfoState } from '@/store/feature/applyInfo';
import { useAppSelector } from '@/store/hooks';

import FirstStep from '@/page/personal/FirstStep';
import SecondStep from '@/page/personal/SecondStep';
import ThirdStep from '@/page/personal/ThirdStep';
import ConfirmStep from '@/page/common/ConfirmStep';
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
        return <ConfirmStep />;
      case 5:
        return <LastStep />;
      default:
        return <></>;
    }
  };

  return <>{switchStep(applyInfo)}</>;
};

export default Personal;
