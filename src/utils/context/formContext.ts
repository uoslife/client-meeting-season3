import { IFormContext, IformInfo } from '@/types/form';
import { createContext } from 'react';

export const FormContext = createContext<null | IFormContext>(null);
