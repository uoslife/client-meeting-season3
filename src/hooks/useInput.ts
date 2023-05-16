import { useCallback, useState, ChangeEvent } from 'react';

export type UseInputProps<T> = [T, (e: ChangeEvent<HTMLInputElement>) => void];

const useInput = (initialValue?: string): UseInputProps<string | undefined> => {
  const [value, setValue] = useState<string | undefined>(initialValue);

  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, handler];
};

export default useInput;
