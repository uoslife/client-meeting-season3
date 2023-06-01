import {
  GetMatchResponse,
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
export const changeStudentTypeToInfo = (studentType: string) => {
  switch (studentType) {
    case 'UNDERGRADUATE':
      return '학부생';
    case 'POSTGRADUATE':
      return '대학원생';
    case 'GRADUATE':
      return '졸업생';
    default:
      return '';
  }
};

export const changeDepartment = (department: string) => {
  return DEPARTMENTS.find(value => value.name === department)!.eng_name;
};
export const changeDepartmentToInfo = (department: string) => {
  return DEPARTMENTS.find(value => value.eng_name === department)!.name;
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

  const changeDepartment = (department: string) => {
    return DEPARTMENTS.filter(data => data.eng_name === department)[0].name;
  };
  const changeStudentType = (studentType: string) => {
    switch (studentType) {
      case 'UNDERGRADUATE':
        return '학부생';
      case 'POSTGRADUATE':
        return '대학원생';
      case 'GRADUATE':
        return '졸업생';
      default:
        return '';
    }
  };

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

    const groupAge = data.teamUserList
      .map(data => data.age.toString() + '년생')
      .join(', ');
    const groupKakaoId = data.teamUserList
      .map(data => data.kakaoTalkId)
      .join(', ');
    const groupDepartment = data.teamUserList
      .map(data => changeDepartment(data.department))
      .join(', ');
    const groupStudentType = data.teamUserList
      .map(data => changeStudentType(data.studentType))
      .join(', ');

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
              data: age.toString() + '년생',
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
              data: changeDepartment(department),
            },
            {
              title_kr: '신분',
              title_en: 'studentType',
              type: 'info',
              data: changeStudentType(studentType),
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
              title_kr: '성별',
              title_en: 'gender',
              type: 'info',
              data: sex === 'MALE' ? '남자' : '여자',
            },
            {
              title_kr: '나이',
              title_en: 'age',
              type: 'info',
              data: groupAge,
            },
            {
              title_kr: '카카오톡 ID',
              title_en: 'kakaoId',
              type: 'info',
              data: groupKakaoId,
            },
            {
              title_kr: '학과',
              title_en: 'major',
              type: 'info',
              data: groupDepartment,
            },
            {
              title_kr: '신분',
              title_en: 'studentType',
              type: 'info',
              data: groupStudentType,
            },
          ];
    return beforeArr.concat(
      info.binaryToInfoDataArr(type) as ApplyDataArr,
    ) as ApplyDataArr;
  } else {
    return info.binaryToPerferDataArr(type) as ApplyDataArr;
  }
};

export const toSuccessDataArr = (matchData: GetMatchResponse) => {
  const personalBinaryToInfo = new BinaryToInfo(
    'personal',
    matchData.informationDistance,
    '',
    '',
    '',
  );
  const groupBinaryToInfo = new BinaryToInfo(
    'group',
    matchData.informationDistance,
    '',
    '',
    '',
  );

  switch (matchData.teamType) {
    case 'SINGLE':
      const userInfo = matchData.teamUserList[0];

      return <ApplyDataArr>[
        {
          title_kr: '닉네임',
          title_en: 'nickname',
          type: 'info',
          data: userInfo.nickname,
        },
        {
          title_kr: '성별',
          title_en: 'gender',
          type: 'info',
          data: matchData.sex === 'MALE' ? '남자' : '여자',
        },
        {
          title_kr: '나이',
          title_en: 'age',
          type: 'info',
          data: userInfo.age.toString() + '년생',
        },
        {
          title_kr: '키',
          title_en: 'height',
          type: 'info',
          data: userInfo.height,
        },
        {
          title_kr: '학과',
          title_en: 'major',
          type: 'info',
          data: changeDepartmentToInfo(userInfo.department),
        },
        {
          title_kr: '신분',
          title_en: 'studentType',
          type: 'info',
          data: changeStudentTypeToInfo(userInfo.studentType),
        },
        {
          title_kr: '흡연 여부',
          title_en: 'smoking',
          type: 'info',
          data: userInfo.smoking ? '흡연' : '비흡연',
        },
        {
          title_kr: '동물상',
          title_en: 'animal',
          type: 'info',
          data: personalBinaryToInfo.successAnimalData(),
        },
        {
          title_kr: 'MBTI',
          title_en: 'mbti',
          type: 'info',
          data: personalBinaryToInfo.successMbtiData(),
        },
        {
          title_kr: '관심사',
          title_en: 'interest',
          type: 'info',
          data: personalBinaryToInfo.successInterestData(),
        },
        {
          title_kr: 'Q&A',
          title_en: 'question',
          type: 'info',
          data: personalBinaryToInfo.successQuestionData(),
        },
      ];

    case 'TRIPLE':
      const teamInfo = matchData.teamUserList;
      const averageAge =
        Math.round(
          teamInfo
            .map(data => data.age)
            .reduce((total, number) => {
              return total + number;
            }, 0) / 3,
        ).toString() + '년생';
      const groupDepartment = teamInfo
        .map(data => data.department)
        .map(data => changeDepartmentToInfo(data))
        .join(', ');
      const groupStudentType = teamInfo
        .map(data => data.studentType)
        .map(data => changeStudentTypeToInfo(data))
        .join(', ');

      return <ApplyDataArr>[
        {
          title_kr: '팅 이름',
          title_en: 'teamname',
          type: 'info',
          data: matchData.teamName,
        },
        {
          title_kr: '성별',
          title_en: 'gender',
          type: 'info',
          data: matchData.sex === 'MALE' ? '남자' : '여자',
        },
        {
          title_kr: '평균 나이',
          title_en: 'age',
          type: 'info',
          data: averageAge,
        },
        {
          title_kr: '학과',
          title_en: 'major',
          type: 'info',
          data: groupDepartment,
        },
        {
          title_kr: '신분',
          title_en: 'studentType',
          type: 'info',
          data: groupStudentType,
        },
        {
          title_kr: '선호 요일',
          title_en: 'preferDay',
          type: 'info',
          data: groupBinaryToInfo.successGroupDayData(),
        },
        {
          title_kr: '우리 팅은',
          title_en: 'question',
          type: 'info',
          data: groupBinaryToInfo.successGroupQuestionData(),
        },
      ];
  }
};
