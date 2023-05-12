import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProgressState = {
  currentPage: number;
  maxPage: number;
  isProgressbar: boolean;
  title: string;
};

const initialState = {
  currentPage: 1,
  maxPage: 10,
  isProgressbar: false,
  title: '시대팅 종류 선택',
} as ProgressState;

export const progressHeaderSlice = createSlice({
  name: 'progressHeader',
  initialState,
  reducers: {
    reset: () => initialState,
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setMaxPage: (state, action: PayloadAction<number>) => {
      state.maxPage = action.payload;
    },
    setIsProgressbar: (state, action: PayloadAction<boolean>) => {
      state.isProgressbar = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { setCurrentPage, setMaxPage, setIsProgressbar, setTitle, reset } =
  progressHeaderSlice.actions;
export default progressHeaderSlice.reducer;
