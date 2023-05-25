import { ApplyDataArr } from '@/types/apply.type';

export const copyLink = (link: string) => {
  navigator.clipboard.writeText(link);
};

export const toPostForm = (applyData: ApplyDataArr) => {
  let newArr = {};
  applyData.forEach(data => {
    newArr = { ...newArr, [data.title_en]: data.data };
  });
  return newArr;
};
