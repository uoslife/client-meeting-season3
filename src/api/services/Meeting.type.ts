import * as Type from '@/api/types/meeting.type';

import {
  ServiceFunc,
  ServiceFuncWithRequest,
  ServiceFuncOnlyRequest,
  ServiceFuncOnlyResponse,
} from './types';

type MeetingService = {
  /** user */
  getUser: ServiceFuncOnlyResponse<Type.GetUserResponse>;

  duplicateCheck: ServiceFunc<
    Type.DuplicateCheckParams,
    Type.DuplicateCheckResponse
  >;

  updateUser: ServiceFuncOnlyRequest<Type.UpdateUserRequest>;

  /** common */
  createTeam: ServiceFunc<Type.CreateTeamParams, Type.CreateTeamResponse>;

  postTeamInfo: ServiceFuncWithRequest<
    Type.PostTeamInfoParams,
    Type.PostTeamInfoRequest,
    Type.PostTeamInfoResponse
  >;

  getTeamInfo: ServiceFunc<Type.GetTeamInfoParams, Type.GetTeamInfoResponse>;

  deleteTeam: ServiceFunc<Type.DeleteTeamParams, Type.DeleteTeamResponse>;

  /** group(TRIPLE) */
  getTeamStatus: ServiceFunc<
    Type.GetTeamStatusParams,
    Type.GetTeamStatusResponse
  >;

  enterTeam: ServiceFuncWithRequest<
    Type.EnterTeamParams,
    Type.EnterTeamRequest,
    Type.EnterTeamResponse
  >;
};

export default MeetingService;
