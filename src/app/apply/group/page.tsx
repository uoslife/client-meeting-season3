'use client';

import { ApplyInfoState } from '@/store/feature/applyInfo';
import { useAppSelector } from '@/store/hooks';

import ProgressHeader from '@/components/header/progressHeader/ProgressHeader';

import FirstStep from '@/pages/group/FirstStep';

const Group = () => {
  const applyInfo = useAppSelector(state => state.applyInfo);
  console.log(applyInfo);

  const switchStep = (applyInfo: ApplyInfoState) => {
    switch (applyInfo.curStep) {
      case 1:
        return <FirstStep />;
      case 2:
        return <FirstStep />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <ProgressHeader isProgress={true} isProgressbar={true} />
      {switchStep(applyInfo)}
    </>
  );
};

export default Group;
