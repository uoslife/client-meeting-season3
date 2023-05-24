'use client';

import { ApplyInfoState } from '@/store/feature/applyInfo';
import { useAppSelector } from '@/store/hooks';

import ApplyMyInfoStep from '@/page/common/applyMyInfoStep';
import SecondStep from '@/page/groupMember/SecondStep';
import LastStep from '@/page/common/LastStep';

const GroupLeaderPage = () => {
  const applyInfo = useAppSelector(state => state.applyInfo);

  const switchStep = (applyInfo: ApplyInfoState) => {
    switch (applyInfo.curStep) {
      case 1:
        return <ApplyMyInfoStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <LastStep />;
      default:
        return <></>;
    }
  };

  return <>{switchStep(applyInfo)}</>;
};

export default GroupLeaderPage;
