'use client';

import { ApplyInfoState } from '@/store/feature/applyInfo';
import { useAppSelector } from '@/store/hooks';

import ProgressHeader from '@/components/header/progressHeader/ProgressHeader';

import FirstStep from '@/page/groupLeader/FirstStep';
import SecondStep from '@/page/groupLeader/SecondStep';
import ThirdStep from '@/page/groupLeader/ThirdStep';
import LastStep from '@/page/common/LastStep';

const Group = () => {
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
        return <LastStep />;
      default:
        return <></>;
    }
  };

  return <>{switchStep(applyInfo)}</>;
};

export default Group;
