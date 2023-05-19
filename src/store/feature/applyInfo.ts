import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ApplyInfoState = {
  meetingType: 'personal' | 'group' | 'groupLeader' | 'groupMember' | '';
  curPage: number;
  curStep: number;
};

const initialState: ApplyInfoState = {
  meetingType: '',
  curPage: 1,
  curStep: 1,
};

export const applyInfo = createSlice({
  name: 'applyInfo',
  initialState,
  reducers: {
    setMeetingType: (
      state,
      action: PayloadAction<ApplyInfoState['meetingType']>,
    ) => {
      state.meetingType = action.payload;
    },
    incrementStep: state => {
      state.curStep += 1;
    },
    decrementStep: state => {
      state.curStep -= 1;
    },
    incrementPage: state => {
      state.curPage += 1;
    },
    decrementPage: state => {
      state.curPage -= 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.curPage = action.payload;
    },
    resetAll: () => initialState,
    resetStep: state => {
      state.curStep = initialState.curStep;
    },
    resetPage: state => {
      state.curPage = initialState.curPage;
    },
  },
});

export const {
  setMeetingType,
  incrementStep,
  decrementStep,
  incrementPage,
  decrementPage,
  setPage,
  resetAll,
  resetStep,
  resetPage,
} = applyInfo.actions;
export default applyInfo.reducer;
