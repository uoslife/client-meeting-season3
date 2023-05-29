import { ApplyData, ApplyQuestionArrType } from '@/types/apply.type';

export interface IInfoToBinary {
  type?: 'personal' | 'group';
  myAge?: ApplyData<number>;
  questions?: ApplyData<ApplyQuestionArrType>;
  mbti?: ApplyData<string[]>;
  animal?: ApplyData<string[]>;
  preferAge?: ApplyData<string[]>;
  preferHeight?: ApplyData<string[]>;
  studentType?: ApplyData<string>;
  major?: ApplyData<string[]>;

  smoking?: ApplyData<string>;

  preferDay?: ApplyData<string[]>;
  atmosphere?: ApplyData<string>;
  interests?: ApplyData<string[]>;
}

export interface IBinaryToInfo {
  type?: 'personal' | 'group';
  informationDistance?: string;
  informationFilter?: string;

  preferenceDistance?: string;
  preferenceFilter?: string;
}

export type SingleInformationFilterType = {
  age: ApplyData<string[]>;
  smoking: ApplyData<string>;
  major: ApplyData<string[]>;
  studentType: ApplyData<string>;
};

export type SinglePreferenceDistanceType = {
  height: ApplyData<string[]>;
  mbti: ApplyData<string[]>;
  animal: ApplyData<string[]>;
};

export type SinglePreferenceFilterType = {
  age: ApplyData<string[]>;
  smoking: ApplyData<string>;
  major: ApplyData<string[]>;
  studentType: ApplyData<string>;
};

export type TripleInformationDistanceType = {
  question1: ApplyData<ApplyQuestionArrType>;
  question2: ApplyData<ApplyQuestionArrType>;
  date: ApplyData<string[]>;
};

export type TripleInformationFilterType = {
  question1: ApplyData<ApplyQuestionArrType>;
  question2: ApplyData<ApplyQuestionArrType>;
  major: ApplyData<string[]>;
};

export type TriplePreferenceDistanceType = {
  age: ApplyData<string[]>;
};
