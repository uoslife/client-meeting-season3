import { NativeBridge } from './bridge';

export const ACTIONS = {
  version: {
    code: 'getVersionCode',
    name: 'getVersionName',
    update: 'goUpdate',
  },
  env: {
    platform: 'getPlatform',
    safeArea: 'getTopMarginSize',
  },
  device: {
    id: 'getDeviceId',
    secret: 'getDeviceSecret',
    pushToken: 'getPushToken',
  },
};

export class NativeActions {
  constructor(private readonly nativeBridge: NativeBridge) {}

  async getVersionCode(): Promise<number | undefined> {
    return this.nativeBridge.call<number>(ACTIONS.version.code);
  }

  async getVersionName(): Promise<string | undefined> {
    return this.nativeBridge.call<string>(ACTIONS.version.name);
  }

  async goUpdate(): Promise<void> {
    return this.nativeBridge.call<void>(ACTIONS.version.update);
  }

  async getPlatform(): Promise<'android' | 'ios' | undefined> {
    return this.nativeBridge.call<'android' | 'ios'>(ACTIONS.env.platform);
  }

  async getSafeArea(): Promise<number | undefined> {
    return this.nativeBridge.call<number>(ACTIONS.env.safeArea);
  }

  async getDeviceId(): Promise<string | undefined> {
    return this.nativeBridge.call<string>(ACTIONS.device.id);
  }

  async getDeviceSecret(): Promise<string | undefined> {
    return this.nativeBridge.call<string>(ACTIONS.device.secret);
  }

  async getPushToken(): Promise<string | undefined> {
    return this.nativeBridge.call<string>(ACTIONS.device.pushToken);
  }
}
