import { ApplyData, ApplyQuestionArrType } from '@/types/apply.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type GroupState = {
  info_name: ApplyData<string>;
  info_preferDay: ApplyData<string[]>;
  info_question: ApplyData<ApplyQuestionArrType>;
  prefer_age: ApplyData<string[]>;
  prefer_major: ApplyData<string[]>;
  prefer_atmosphere: ApplyData<string>;
};

const initialState: GroupState = {
  info_name: {
    title_kr: '팅 이름',
    title_en: 'name',
    type: 'info',
    data: '',
  },
  info_preferDay: {
    title_kr: '선호요일',
    title_en: 'preferDay',
    type: 'info',
    data: [''],
  },
  info_question: {
    title_kr: 'Q&A',
    title_en: 'question',
    type: 'info',
    data: [
      { label: '', order: 0 },
      { label: '', order: 1 },
      { label: '', order: 2 },
      { label: '', order: 3 },
    ],
  },
  prefer_age: {
    title_kr: '나이',
    title_en: 'age',
    type: 'prefer',
    data: [''],
  },
  prefer_major: {
    title_kr: '기피학과',
    title_en: 'major',
    type: 'prefer',
    data: [''],
  },
  prefer_atmosphere: {
    title_kr: '분위기',
    title_en: 'atmosphere',
    type: 'prefer',
    data: '',
  },
};

export const personal = createSlice({
  name: 'personal',
  initialState,
  reducers: {
    setInfoName: (state, action: PayloadAction<string>) => {
      state.info_name.data = action.payload;
    },
    setInfoPreferDay: (state, action: PayloadAction<string[]>) => {
      state.info_preferDay.data = action.payload;
    },
    setInfoQuestionGroup: (
      state,
      action: PayloadAction<{ label: string; order: number }>,
    ) => {
      const { label, order } = action.payload;

      state.info_question.data.map(l =>
        l.order === order ? (l.label = label) : l,
      );
    },
    setPreferAgeGroup: (state, action: PayloadAction<string[]>) => {
      state.prefer_age.data = action.payload;
    },
    setPreferMajorGroup: (state, action: PayloadAction<string[]>) => {
      state.prefer_major.data = action.payload;
    },
    setPreferAtmosphere: (state, action: PayloadAction<string>) => {
      state.prefer_atmosphere.data = action.payload;
    },
  },
});

export const {
  setInfoName,
  setInfoPreferDay,
  setInfoQuestionGroup,
  setPreferAgeGroup,
  setPreferMajorGroup,
  setPreferAtmosphere,
} = personal.actions;
export default personal.reducer;
