import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ApplyInfoState = {
  meetingType: 'group' | 'personal' | '';
  curPage: number;
  maxPage: number;
  curStep: number;
  maxStep: number;
};

const initialState: ApplyInfoState = {
  meetingType: '',
  curPage: 0,
  maxPage: 0,
  curStep: 0,
  maxStep: 0,
};

export const applyInfo = createSlice({
  name: 'applyInfo',
  initialState,
  reducers: {
    reset: () => initialState,
    incrementStep: state => {
      state.curStep += 1;
    },
    decrementStep: state => {
      state.curStep -= 1;
    },
  },
});

export const { incrementStep, decrementStep, reset } = applyInfo.actions;
export default applyInfo.reducer;
