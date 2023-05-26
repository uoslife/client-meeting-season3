import axios, { AxiosError } from 'axios';

const API = axios.create({ withCredentials: true });

API.interceptors.response.use(
  res => res,
  (error: AxiosError) => {
    const statusCode = error.response?.status;
    if (statusCode === 401) alert('로그인 후 다시 시도해주세요');
    else return Promise.reject(error);
  },
);

export default API;
