import { ApplyInfoState } from '@/store/feature/applyInfo';
import { StepProps } from '@/types/step.type';
import { useEffect } from 'react';

type UseCurPageResetProps = {
  setIsFinishPage: StepProps['setIsFinishPage'];
  curPage: ApplyInfoState['curPage'];
};

const useCurPageReset = ({
  setIsFinishPage,
  curPage,
}: UseCurPageResetProps) => {
  useEffect(() => {
    setIsFinishPage(false);
  }, [curPage, setIsFinishPage]);
};
export default useCurPageReset;
