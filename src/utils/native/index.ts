import { NativeBridge } from './bridge';
import { NativeActions } from './actions';

export const nativeBridge = new NativeBridge();
export const nativeActions = new NativeActions(nativeBridge);
