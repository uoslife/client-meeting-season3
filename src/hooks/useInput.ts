import { useCallback, useState, ChangeEvent } from 'react';

export type UseInputProps<T> = [T, (e: ChangeEvent<HTMLInputElement>) => void];

const useInput = <T>(initialValue: T): UseInputProps<T> => {
  const [value, setValue] = useState<T>(initialValue);

  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, handler];
};

export default useInput;
