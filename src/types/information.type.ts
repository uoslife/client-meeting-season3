import { ApplyData, ApplyQuestionArrType } from '@/types/apply.type';

export type SingleInformationDataType = {
  height: ApplyData<number>;
  question:  ApplyData<ApplyQuestionArrType>;
  mbti: ApplyData<string[]>;
  animal: ApplyData<string[]>;
};

export type SingleInformationFilterType = {
  age: ApplyData<number>;
  smoking: ApplyData<string>;
  major: ApplyData<string>;
  studentType: ApplyData<string>;
};

export type SinglePreferenceType = {
  height: ApplyData<string[]>;
  mbti: ApplyData<string[]>;
  animal: ApplyData<string[]>;
};