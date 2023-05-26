import { nativeActions } from './index';
import { authAPI } from '@/api';

export const supportNativeEnvironment = async () => {
  const [safeArea, deviceId, deviceSecret] = await Promise.all([
    nativeActions.getSafeArea(),
    nativeActions.getDeviceId(),
    nativeActions.getDeviceSecret(),
  ]);

  localStorage.setItem('safeArea', `${safeArea || 0}`);

  if (deviceId && deviceSecret) {
    await authAPI.registerDevice({
      device_id: deviceId,
      secret: deviceSecret,
    });
  }
};
