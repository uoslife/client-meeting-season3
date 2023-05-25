import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import applyInfoReducer from './feature/applyInfo';
import commonReducer from './feature/common/commonReducer';
import personalReducer from './feature/meetingType/personalReducer';
import groupReducer from './feature/meetingType/groupReducer';

// import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window === 'undefined'
    ? createNoopStorage()
    : createWebStorage('local');

const rootReducer = combineReducers({
  applyInfo: applyInfoReducer,
  common: commonReducer,
  personal: personalReducer,
  group: groupReducer,
});

// create slice
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['applyInfo', 'common', 'personal', 'group'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
