import dynamic from 'next/dynamic';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { ApplyInfoState, incrementStep } from '@/store/feature/applyInfo';

const FirstPage = () => {
  const { curStep } = useAppSelector(state => state.applyInfo);
  const dispatch = useAppDispatch();

  const FirstStep = dynamic(() => import('./FirstStep'));
  const SecondStep = dynamic(() => import('./SecondStep'));
  const ThirdStep = dynamic(() => import('./ThirdStep'));

  const changeStep = (curStep: ApplyInfoState['curStep']) => {
    switch (curStep) {
      case 0:
        return <FirstStep />;
      case 1:
        return <SecondStep />;
      case 2:
        return <ThirdStep />;
      default:
        return <></>;
    }
  };
  return (
    <>
      {changeStep(curStep)}
      {/* footer */}
      {/* dispatch(incrementStep()) */}
    </>
  );
};

export default FirstPage;
