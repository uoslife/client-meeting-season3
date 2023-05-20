import {
  useCallback,
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from 'react';

export type UseInputProps<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<T>>,
];

const useInput = (initialValue: string): UseInputProps<string> => {
  const [value, setValue] = useState<string>(initialValue);

  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};

export default useInput;
