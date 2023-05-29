import {
  GetTeamInfoResponse,
  GetTeamStatusResponse,
} from '@/api/types/meeting.type';
import { DEPARTMENTS } from '@/constants/departments';
import { ApplyDataArr } from '@/types/apply.type';
import { BinaryToInfo } from './binary/binaryToInfomation';

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
    teamName: data.teamName,
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

export type ToDataArrType = {
  infoPrefer: {
    informationDistance?: string;
    informationFilter?: string;
    preferenceDistance?: string;
    preferenceFilter?: string;
  };
  sex: '' | 'MALE' | 'FEMALE' | null;
  teamUserList: GetTeamInfoResponse['teamUserList'];
};

export const toDataArr = (
  data: ToDataArrType,
  type: 'personal' | 'group',
  infoOrPrefer: 'info' | 'prefer',
): ApplyDataArr => {
  const info = new BinaryToInfo(
    type,
    data.infoPrefer.informationDistance,
    data.infoPrefer.informationFilter,
    data.infoPrefer.preferenceDistance,
    data.infoPrefer.preferenceFilter,
  );

  if (infoOrPrefer === 'info') {
    const { sex } = data;
    const {
      nickname,
      age,
      height,
      kakaoTalkId,
      department,
      studentType,
      smoking,
    } = data.teamUserList[0];
    const beforeArr: ApplyDataArr =
      type === 'personal'
        ? [
            {
              title_kr: '닉네임',
              title_en: 'nickname',
              type: 'info',
              data: nickname,
            },
            {
              title_kr: '성별',
              title_en: 'gender',
              type: 'info',
              data: sex === 'MALE' ? '남자' : '여자',
            },
            {
              title_kr: '나이',
              title_en: 'age',
              type: 'info',
              data: age,
            },
            {
              title_kr: '키',
              title_en: 'height',
              type: 'info',
              data: height,
            },
            {
              title_kr: '카카오톡 ID',
              title_en: 'kakaoId',
              type: 'info',
              data: kakaoTalkId,
            },
            {
              title_kr: '학과',
              title_en: 'major',
              type: 'info',
              data: department,
            },
            {
              title_kr: '신분',
              title_en: 'studentType',
              type: 'info',
              data: studentType,
            },
            {
              title_kr: '흡연 여부',
              title_en: 'smoking',
              type: 'info',
              data: smoking ? '흡연' : '비흡연',
            },
          ]
        : [
            // 3개 합치기
            {
              title_kr: '닉네임',
              title_en: 'nickname',
              type: 'info',
              data: 'ㅂㄹㅈㄷㄱ',
            },
            {
              title_kr: '성별',
              title_en: 'gender',
              type: 'info',
              data: '남자',
            },
            {
              title_kr: '나이',
              title_en: 'age',
              type: 'info',
              data: 22,
            },
            {
              title_kr: '키',
              title_en: 'height',
              type: 'info',
              data: 143,
            },
            {
              title_kr: '카카오톡 ID',
              title_en: 'kakaoId',
              type: 'info',
              data: '1234ㄱㄹ',
            },
            {
              title_kr: '학과',
              title_en: 'major',
              type: 'info',
              data: '행정학과',
            },
            {
              title_kr: '신분',
              title_en: 'studentType',
              type: 'info',
              data: '학부생',
            },
            {
              title_kr: '흡연 여부',
              title_en: 'smoking',
              type: 'info',
              data: '흡연',
            },
            {
              title_kr: '팅 이름',
              title_en: 'name',
              type: 'info',
              data: '1234',
            },
          ];
    return beforeArr.concat(
      info.binaryToInfoDataArr(type) as ApplyDataArr,
    ) as ApplyDataArr;
  } else {
    return info.binaryToPerferDataArr(type) as ApplyDataArr;
  }
};
