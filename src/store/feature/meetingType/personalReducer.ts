import { ApplyData, ApplyQuestionArrType } from '@/types/apply.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PersonalState = {
  info_animal: ApplyData<string[]>;
  info_mbti: ApplyData<string[]>;
  info_interests: ApplyData<string[]>;
  info_question: ApplyData<ApplyQuestionArrType>;
  prefer_age: ApplyData<string[]>;
  prefer_height: ApplyData<string[]>;
  prefer_studentType: ApplyData<string[]>;
  prefer_major: ApplyData<string[]>;
  prefer_smoking: ApplyData<string>;
  prefer_animal: ApplyData<string[]>;
  prefer_mbti: ApplyData<string[]>;
};

const initialState: PersonalState = {
  info_animal: {
    title_kr: '동물상',
    title_en: 'animal',
    type: 'info',
    data: [''],
  },
  info_mbti: {
    title_kr: 'MBTI',
    title_en: 'mbti',
    type: 'info',
    data: ['', '', '', ''],
  },
  info_interests: {
    title_kr: '관심사',
    title_en: 'interests',
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
  prefer_height: {
    title_kr: '키',
    title_en: 'height',
    type: 'prefer',
    data: [''],
  },
  prefer_studentType: {
    title_kr: '신분',
    title_en: 'studentType',
    type: 'prefer',
    data: [''],
  },
  prefer_major: {
    title_kr: '기피학과',
    title_en: 'major',
    type: 'prefer',
    data: [''],
  },
  prefer_smoking: {
    title_kr: '흡연 여부',
    title_en: 'smoking',
    type: 'prefer',
    data: '',
  },
  prefer_animal: {
    title_kr: '동물상',
    title_en: 'animal',
    type: 'prefer',
    data: [''],
  },
  prefer_mbti: {
    title_kr: 'MBTI',
    title_en: 'mbti',
    type: 'prefer',
    data: [''],
  },
};

export const personal = createSlice({
  name: 'personal',
  initialState,
  reducers: {
    setInfoAnimal: (state, action: PayloadAction<string[]>) => {
      state.info_animal.data = action.payload;
    },
    setInfoMbti: (state, action: PayloadAction<string[]>) => {
      state.info_mbti.data = action.payload;
    },
    setInfoInterests: (state, action: PayloadAction<string[]>) => {
      state.info_interests.data = action.payload;
    },
    setInfoQuestionPersonal: (
      state,
      action: PayloadAction<{ label: string; order: number }>,
    ) => {
      const { label, order } = action.payload;

      state.info_question.data.map(l =>
        l.order === order ? (l.label = label) : l,
      );
    },
    setPreferAgePersonal: (state, action: PayloadAction<string[]>) => {
      state.prefer_age.data = action.payload;
    },
    setPreferHeight: (state, action: PayloadAction<string[]>) => {
      state.prefer_height.data = action.payload;
    },
    setPreferStudentType: (state, action: PayloadAction<string[]>) => {
      state.prefer_studentType.data = action.payload;
    },
    setPreferMajorPersonal: (state, action: PayloadAction<string[]>) => {
      state.prefer_major.data = action.payload;
    },
    setPreferSmoking: (state, action: PayloadAction<string>) => {
      state.prefer_smoking.data = action.payload;
    },
    setPreferAnimal: (state, action: PayloadAction<string[]>) => {
      state.prefer_animal.data = action.payload;
    },
    setPreferMbti: (state, action: PayloadAction<string[]>) => {
      state.prefer_mbti.data = action.payload;
    },
    resetAllPersonalState: () => initialState,
  },
});

export const {
  setInfoAnimal,
  setInfoMbti,
  setInfoInterests,
  setInfoQuestionPersonal,
  setPreferAgePersonal,
  setPreferAnimal,
  setPreferHeight,
  setPreferMajorPersonal,
  setPreferMbti,
  setPreferSmoking,
  setPreferStudentType,
  resetAllPersonalState,
} = personal.actions;
export default personal.reducer;
