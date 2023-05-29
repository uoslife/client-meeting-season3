import {
  GetTeamInfoResponse,
  GetTeamStatusResponse,
} from '@/api/types/meeting.type';
import { DEPARTMENTS } from '@/constants/departments';
import { ApplyDataArr } from '@/types/apply.type';

export const copyLink = (link: string) => {
  navigator.clipboard.writeText(link);
};

export const toTeamStatus = (data: GetTeamInfoResponse) => {
  let newUserListArr: GetTeamStatusResponse['userList'] = [];
  data.teamUserList.forEach(data => {
    newUserListArr.push({
      nickname: data.nickname,
      age: data.age,
    });
  });
  const teamStatus = {
    teamName: data.userName,
    userList: newUserListArr,
  };
  return teamStatus;
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
