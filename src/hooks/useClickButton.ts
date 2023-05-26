import { useEffect, useState } from 'react';
import { CommonState } from '@/store/feature/common/commonReducer';
import { ApplyData, ApplyQuestionArrType } from '@/types/apply.type';

type ButtonState = {
  label: string;
  active: boolean;
  order: number;
};

// nameArr = ['a', 'b', ...];

const useClickButton = <T>(
  nameArr: Array<string>,
  maxSelectedCount: number,
  storedState?: ApplyData<string | string[] | ApplyQuestionArrType>,
): [
  (order: number) => void,
  (order: number) => boolean,
  boolean,
  ButtonState[],
] => {
  const initState: Array<ButtonState> = [];

  if (!storedState)
    nameArr.map((label, i) =>
      initState.push({ label, active: false, order: i }),
    );
  else {
    if (storedState.title_en === 'question') {
      nameArr.map((label, i) =>
        (storedState.data as ApplyQuestionArrType).filter(
          data => data.label === label,
        ).length !== 0
          ? initState.push({ label, active: true, order: i })
          : initState.push({ label, active: false, order: i }),
      );
    } else if (typeof storedState.data === 'object') {
      nameArr.map((label, i) =>
        (storedState.data as string[]).includes(label)
          ? initState.push({ label, active: true, order: i })
          : initState.push({ label, active: false, order: i }),
      );
    }
    if (typeof storedState.data === 'string') {
      nameArr.map((label, i) =>
        storedState.data === label
          ? initState.push({ label, active: true, order: i })
          : initState.push({ label, active: false, order: i }),
      );
    } else
      nameArr.map((label, i) =>
        initState.push({ label, active: false, order: i }),
      );
  }
  const [state, setState] = useState(initState);

  const onClickButton = (order: number) => {
    const isMaxSelectedCount =
      state.filter(data => data.active).length >= maxSelectedCount;
    if (maxSelectedCount === 1) {
      setState(() => {
        const newState = initState.map(data =>
          data.active ? { ...data, active: false } : data,
        );
        newState[order].active = true;
        return newState;
      });
      return;
    }

    setState(prev =>
      prev.map(item =>
        item.order === order
          ? isMaxSelectedCount
            ? item.active
              ? { ...item, active: !item.active }
              : item
            : { ...item, active: !item.active }
          : item,
      ),
    );
  };

  const [isClickedButton, setIsClickedButton] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<ButtonState[]>([]);

  useEffect(() => {
    const activatedObj = state.filter(data => data.active);

    setSelectedLabel(activatedObj);
    if (activatedObj.length !== 0) {
      setIsClickedButton(true);
    } else {
      setIsClickedButton(false);
    }
  }, [state]);

  const buttonActiveState = (order: number) => {
    return state[order].active;
  };

  return [onClickButton, buttonActiveState, isClickedButton, selectedLabel];
};

export default useClickButton;
