import * as Type from '@/api/types/meeting.type';

import { ServiceFunc, ServiceFuncWithRequestBody } from './types';

type MeetingService = {
  /** common */
  createTeam: ServiceFunc<Type.CreateTeamParams, Type.CreateTeamResponse>;

  postTeamInfo: ServiceFuncWithRequestBody<
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

  enterTeam: ServiceFunc<Type.EnterTeamParams, Type.EnterTeamResponse>;
};

export default MeetingService;
