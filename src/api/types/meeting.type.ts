/** Params Types */
export type TeamType = 'SINGLE' | 'TRIPLE';
export type TeamTypeWithObject = { teamType: TeamType };

export type IsTeamLeader = boolean;
export type IsTeamLeaderWithObject = { isTeamLeader: IsTeamLeader };

export type Code = string;
export type CodeWithObject = { code: Code };

/** */

export type GetUserResponse = {
  id: string;
  birthYear: number;
  gender: 'MALE' | 'FEMALE' | '' | null;
  name: string;
  department: string;
  studentType: string;
  smoking: boolean;
  spirit_animal: string;
  mbti: string;
  interest: string;
  height: number;
  nickname: string;
};

export type DuplicateCheckParams = {
  nickname: string;
};
export type DuplicateCheckResponse = {
  duplicated: boolean;
};

export type UpdateUserRequest = {
  birthYear: number;
  gender: 'MALE' | 'FEMALE' | '' | null;
  kakaoTalkId: string;
  name?: string;
  department: string;
  studentType: string;
  smoking: boolean;
  spiritAnimal?: string;
  mbti?: string;
  interest?: string;
  height: number;
  nickname: string;
};

export type CreateTeamParams = TeamTypeWithObject &
  IsTeamLeaderWithObject & { name?: string };
export type CreateTeamResponse = '' | string;

export type PostTeamInfoParams = TeamTypeWithObject & IsTeamLeaderWithObject;
export type PostTeamInfoRequest = {
  informationDistance: string;
  informationFilter: string;
  informationMeetingTime: string;
  preferenceDistance: string;
  preferenceFilter: string;
};
export type PostTeamInfoResponse = {};

export type GetTeamInfoParams = TeamTypeWithObject;
export type GetTeamInfoResponse = {
  teamType: string;
  sex: 'MALE' | 'FEMALE' | '' | null;
  teamUserList: Array<{
    nickname: string;
    age: number;
    kakaoTalkId: string;
    department: string;
    studentType: string;
    height: number;
    smoking: true;
    spiritAnimal: string;
    interest: string;
    mbti: string;
  }>;
  informationFilter: string;
  informationDistance: string;
  informationMeetingTime: string;
  preferenceFilter: string;
  preferenceDistance: string;
};

export type DeleteTeamParams = TeamTypeWithObject & IsTeamLeaderWithObject;
export type DeleteTeamResponse = {};

export type GetTeamStatusParams = TeamTypeWithObject & { code: string };
export type GetTeamStatusResponse = {
  teamName: string;
  userList: Array<{
    nickname: string;
    age: number;
  }>;
};

export type EnterTeamParams = TeamTypeWithObject &
  CodeWithObject & { isJoin: boolean };
export type EnterTeamRequest = {} | { isJoin: boolean };
export type EnterTeamResponse = null | {
  teamName: string;
  userList: Array<{
    nickname: string;
    age: number;
  }>;
};
