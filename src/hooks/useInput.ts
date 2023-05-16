import {
  useCallback,
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from 'react';

export type UseInputHook<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<T>>,
];

const useInput = <T>(initialValue: T): UseInputHook<T> => {
  const [value, setValue] = useState<T>(initialValue);

  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};

export default useInput;
