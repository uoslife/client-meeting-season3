'use client';

import { ApplyInfoState } from '@/store/feature/applyInfo';
import { useAppSelector } from '@/store/hooks';

import ProgressHeader from '@/components/header/progressHeader/ProgressHeader';

import FirstStep from '@/pages/group/FirstStep';
import SecondStep from '@/pages/group/SecondStep';
import ThirdStep from '@/pages/group/ThirdStep';
import LastStep from '@/pages/common/LastStep';

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

  return (
    <>
      <ProgressHeader isprogress={true} isprogressbar={true} />
      {switchStep(applyInfo)}
    </>
  );
};

export default Group;
