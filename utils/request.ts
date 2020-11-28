import axios from 'axios';
import { getToken } from '.';
const TIME_OUT = 30000;

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: TIME_OUT,
});

request.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response || error.message);
  },
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error?.response?.data?.messageCode);
  },
);

export default request;
