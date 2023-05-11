import { configureStore } from '@reduxjs/toolkit';
import applyInfoReducer from './feature/applyInfo';

export const store = configureStore({
  reducer: { applyInfoReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
