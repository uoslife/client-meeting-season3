import { ApplyData } from '@/types/apply.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CommonState = {
  info_nickname: ApplyData<string>;
  info_gender: ApplyData<string>;
  info_age: ApplyData<number>;
  info_height: ApplyData<number>;
  info_kakaoId: ApplyData<string>;
  info_major: ApplyData<string>;
  info_studentType: ApplyData<string>;
  info_smoking: ApplyData<string>;
};

const initialState: CommonState = {
  info_nickname: {
    title_kr: '닉네임',
    title_en: 'nickname',
    type: 'info',
    data: '',
  },
  info_gender: {
    title_kr: '성별',
    title_en: 'gender',
    type: 'info',
    data: '',
  },
  info_age: {
    title_kr: '나이',
    title_en: 'age',
    type: 'info',
    data: 0,
  },
  info_height: {
    title_kr: '키',
    title_en: 'height',
    type: 'info',
    data: 0,
  },
  info_kakaoId: {
    title_kr: '카카오톡 ID',
    title_en: 'kakaoId',
    type: 'info',
    data: '',
  },
  info_major: {
    title_kr: '학과',
    title_en: 'major',
    type: 'info',
    data: '',
  },
  info_studentType: {
    title_kr: '신분',
    title_en: 'studentType',
    type: 'info',
    data: '',
  },
  info_smoking: {
    title_kr: '흡연 여부',
    title_en: 'smoking',
    type: 'info',
    data: '',
  },
};

export const personal = createSlice({
  name: 'personal',
  initialState,
  reducers: {
    setInfoNickname: (state, action: PayloadAction<string>) => {
      state.info_nickname.data = action.payload;
    },
    setInfoGender: (state, action: PayloadAction<string>) => {
      state.info_gender.data = action.payload;
    },
    setInfoAge: (state, action: PayloadAction<number>) => {
      state.info_age.data = action.payload;
    },
    setInfoHeight: (state, action: PayloadAction<number>) => {
      state.info_height.data = action.payload;
    },
    setInfoKakaoId: (state, action: PayloadAction<string>) => {
      state.info_kakaoId.data = action.payload;
    },
    setInfoMajor: (state, action: PayloadAction<string>) => {
      state.info_major.data = action.payload;
    },
    setInfoStudentType: (state, action: PayloadAction<string>) => {
      state.info_studentType.data = action.payload;
    },
    setInfoSmoking: (state, action: PayloadAction<string>) => {
      state.info_smoking.data = action.payload;
    },
  },
});

export const {
  setInfoNickname,
  setInfoGender,
  setInfoAge,
  setInfoHeight,
  setInfoKakaoId,
  setInfoMajor,
  setInfoStudentType,
  setInfoSmoking,
} = personal.actions;
export default personal.reducer;
