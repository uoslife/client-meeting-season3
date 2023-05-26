import { type AxiosResponse } from 'axios';

export type PromiseAxios<T> = Promise<AxiosResponse<T>>;

export type ServiceFunc<Params = unknown, Res = unknown> = (
  params: Params,
) => PromiseAxios<Res>;

export type ServiceFuncWithRequestBody<
  Params = unknown,
  Req = unknown,
  Res = unknown,
> = (params: Params, req: Req) => PromiseAxios<Res>;

export type ServiceFuncOnlyRequest<Req = unknown> = (
  req: Req,
) => PromiseAxios<{}>;
