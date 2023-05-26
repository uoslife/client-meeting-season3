import API from '@/api/core';

import * as Type from '@/api/types/auth.type';
import AuthService from './Auth.type';

export default class AuthAxiosAPI implements AuthService {
  registerDevice(req: Type.RegisterDeviceRequest) {
    return API.put(`/api/device`, req);
  }
}
