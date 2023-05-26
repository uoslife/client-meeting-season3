import API from '@/api/core';

import * as Type from '@/api/types/meeting.type';
import MeetingService from './Meeting.type';

export default class MeetingAxiosAPI implements MeetingService {
  /** common */
  createTeam(params: Type.CreateTeamParams) {
    return API.post<Type.CreateTeamResponse>(
      `/api/meeting/${params.teamType}/${params.isTeamLeader}/create`,
    );
  }
  postTeamInfo(
    params: Type.PostTeamInfoParams,
    request: Type.PostTeamInfoRequest,
  ) {
    return API.post<Type.PostTeamInfoResponse>(
      `/api/meeting/${params.teamType}/${params.isTeamLeader}/info`,
      request,
    );
  }
  getTeamInfo(params: Type.GetTeamInfoParams) {
    return API.get<Type.GetTeamInfoResponse>(
      `/api/meeting/${params.teamType}/application/info`,
    );
  }
  deleteTeam(params: Type.DeleteTeamParams) {
    return API.delete<Type.DeleteTeamResponse>(
      `/api/meeting/${params.teamType}/${params.isTeamLeader}`,
    );
  }

  /** meeting(TRIPLE) */
  getTeamStatus(params: Type.GetTeamStatusParams) {
    return API.get<Type.GetTeamStatusResponse>(
      `/api/meeting/${params.teamType}/user/list`,
    );
  }
  enterTeam(params: Type.EnterTeamParams) {
    return API.post<Type.EnterTeamResponse>(
      `/api/meeting/${params.teamType}/join/${params.code}`,
    );
  }
}
