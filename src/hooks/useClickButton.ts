import { useEffect, useState } from 'react';

type ButtonState = {
  label: string;
  active: boolean;
};

// nameArr = ['a', 'b', ...];
const useClickButton = (nameArr: Array<string>) => {
  const initState: Array<ButtonState> = [];
  nameArr.forEach(label => initState.push({ label, active: false }));
  const [state, setState] = useState(initState);

  const onClickButton = (order: number) => {
    setState(() => {
      const newState = initState;
      newState[order].active = true;
      return newState;
    });
  };

  const [isClickedButton, setIsClickedButton] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');

  useEffect(() => {
    const activatedObj = state.find(data => data.active);
    if (!!activatedObj) {
      setIsClickedButton(true);
      setSelectedLabel(activatedObj.label);
    }
  }, [state]);

  const buttonActiveState = (order: number) => {
    return state[order].active;
  };

  return { onClickButton, buttonActiveState, isClickedButton, selectedLabel };
};

export default useClickButton;
