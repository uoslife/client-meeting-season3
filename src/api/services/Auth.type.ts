import * as Type from '@/api/types/auth.type';

import { ServiceFuncOnlyRequest } from './types';

type AuthService = {
  registerDevice: ServiceFuncOnlyRequest<Type.RegisterDeviceRequest>;
};

export default AuthService;
