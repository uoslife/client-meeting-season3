import { DEPARTMENTS } from '@/constants/departments';
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

export const changeStudentType = (studentType: string) => {
  switch (studentType) {
    case '학부생':
      return 'UNDERGRADUATE';
    case '대학원생':
      return 'POSTGRADUATE';
    case '졸업생':
      return 'GRADUATE';
    default:
      return '';
  }
};

export const changeDepartment = (department: string) => {
  return DEPARTMENTS.find(value => value.name === department)!.eng_name;
};
