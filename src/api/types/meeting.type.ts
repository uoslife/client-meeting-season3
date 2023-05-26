/** Params Types */
export type TeamType = 'SINGLE' | 'TRIPLE';
export type TeamTypeWithObject = { teamType: TeamType };

export type IsTeamLeader = boolean;
export type IsTeamLeaderWithObject = { isTeamLeader: IsTeamLeader };

export type Code = string;
export type CodeWithObject = { code: Code };

/** */

export type CreateTeamParams = TeamTypeWithObject & IsTeamLeaderWithObject;
export type CreateTeamResponse = {};

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
export type GetTeamInfoResponse = {};

export type DeleteTeamParams = TeamTypeWithObject & IsTeamLeaderWithObject;
export type DeleteTeamResponse = {};

export type GetTeamStatusParams = TeamTypeWithObject;
export type GetTeamStatusResponse = {};

export type EnterTeamParams = TeamTypeWithObject & CodeWithObject;
export type EnterTeamResponse = {};
