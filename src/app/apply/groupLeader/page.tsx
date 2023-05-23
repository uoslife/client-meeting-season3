'use client';

import { ApplyInfoState } from '@/store/feature/applyInfo';
import { useAppSelector } from '@/store/hooks';

import ApplyMyInfoStep from '@/page/common/applyMyInfoStep';
import SecondStep from '@/page/groupLeader/SecondStep';
import ThirdStep from '@/page/groupLeader/ThirdStep';
import FourthStep from '@/page/groupLeader/FourthStep';
import ConfirmStep from '@/page/common/ConfirmStep';
import LastStep from '@/page/common/LastStep';

const Group = () => {
  const applyInfo = useAppSelector(state => state.applyInfo);

  const switchStep = (applyInfo: ApplyInfoState) => {
    switch (applyInfo.curStep) {
      case 1:
        return <ApplyMyInfoStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <FourthStep />;
      case 5:
        return <ConfirmStep />;
      case 6:
        return <LastStep />;
      default:
        return <></>;
    }
  };

  return <>{switchStep(applyInfo)}</>;
};

export default Group;
