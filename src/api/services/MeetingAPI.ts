import { MeetingAPI } from '@/api/core';

import * as Type from '@/api/types/meeting.type';
import MeetingService from './Meeting.type';

export default class MeetingAxiosAPI implements MeetingService {
  /** common */
  createTeam(params: Type.CreateTeamParams) {
    return MeetingAPI.post<Type.CreateTeamResponse>(
      `/api/meeting/${params.teamType}/${params.isTeamLeader}/create`,
    );
  }
  postTeamInfo(
    params: Type.PostTeamInfoParams,
    request: Type.PostTeamInfoRequest,
  ) {
    return MeetingAPI.post<Type.PostTeamInfoResponse>(
      `/api/meeting/${params.teamType}/${params.isTeamLeader}/info`,
      request,
    );
  }
  getTeamInfo(params: Type.GetTeamInfoParams) {
    return MeetingAPI.post<Type.GetTeamInfoResponse>(
      `/api/meeting/${params.teamType}/application/info`,
    );
  }
  deleteTeam(params: Type.DeleteTeamParams) {
    return MeetingAPI.post<Type.DeleteTeamResponse>(
      `/api/meeting/${params.teamType}/${params.isTeamLeader}`,
    );
  }

  /** meeting(TRIPLE) */
  getTeamStatus(params: Type.GetTeamStatusParams) {
    return MeetingAPI.post<Type.GetTeamStatusResponse>(
      `/api/meeting/${params.teamType}/user/list`,
    );
  }
  enterTeam(params: Type.EnterTeamParams) {
    return MeetingAPI.post<Type.EnterTeamResponse>(
      `/api/meeting/${params.teamType}/join/${params.code}`,
    );
  }
}
