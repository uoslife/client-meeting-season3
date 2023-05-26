export class NativeBridge {
  requests = new Map();

  constructor() {
    // @ts-ignore
    window.nativeCallback = (id: number, result: string) =>
      this.callback(id, result);
  }

  async call<T>(method: string, params = {}): Promise<T | undefined> {
    // @ts-ignore
    if (!window.native) return undefined;
    const id = Math.floor(Math.random() * 100);
    // @ts-ignore
    window.native.call(JSON.stringify({ id, method, params }));

    console.info(`[NativeBridge][REQ:${id}] ${method}`);
    return new Promise((resolve) => this.requests.set(id, { method, resolve }));
  }

  callback(id: number, result: string) {
    const request = this.requests.get(id);
    if (!request) return;
    this.requests.delete(id);

    console.info(`[NativeBridge][RES:${id}] ${request.method} => ${result}`);
    return request.resolve(result);
  }
}
