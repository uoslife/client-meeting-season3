import { useEffect, useState } from 'react';

type ButtonState = {
  label: string;
  active: boolean;
  order: number;
};

// nameArr = ['a', 'b', ...];

const useClickButton = (
  nameArr: Array<string>,
  maxSelectedCount: number,
): [
  (order: number) => void,
  (order: number) => boolean,
  boolean,
  ButtonState[],
] => {
  const initState: Array<ButtonState> = [];
  nameArr.map((label, i) => initState.push({ label, active: false, order: i }));
  const [state, setState] = useState(initState);

  const onClickButton = (order: number) => {
    const isMaxSelectedCount =
      state.filter(data => data.active).length >= maxSelectedCount;
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

    if (activatedObj.length !== 0) {
      setIsClickedButton(true);
      setSelectedLabel(activatedObj);
    }
  }, [state]);

  const buttonActiveState = (order: number) => {
    return state[order].active;
  };

  return [onClickButton, buttonActiveState, isClickedButton, selectedLabel];
};

export default useClickButton;
