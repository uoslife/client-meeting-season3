import { createContext } from 'react';
import { IUserFormContext } from '@/types/userId';

export const UserIdContext = createContext<null | IUserFormContext>(null);
