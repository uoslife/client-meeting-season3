import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CounterState = {
  value: number;
};

const initialState = {
  value: 0,
} as CounterState;

export const applyInfo = createSlice({
  name: 'applyInfo',
  initialState,
  reducers: {
    reset: () => initialState,
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
} = applyInfo.actions;
export default applyInfo.reducer;
