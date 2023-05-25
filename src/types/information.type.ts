import { ApplyData, ApplyQuestionArrType } from '@/types/apply.type';

export type InformationDataType = {
  height: ApplyData<number>;
  question:  ApplyData<ApplyQuestionArrType>;
  mbti: ApplyData<string[]>;
  animal: ApplyData<string[]>;
}