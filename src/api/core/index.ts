import axios, { AxiosError } from 'axios';

const API = axios.create({ withCredentials: true });

API.interceptors.response.use(
  res => res,
  (error: AxiosError) => {
    const statusCode = error.response?.status;
    if (statusCode === 401) {
      alert('다시 접속해주세요!');
      window.location.href = 'https://uoslife.com';
    } else return Promise.reject(error);
  },
);

export default API;
