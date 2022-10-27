import axios, { AxiosRequestConfig } from 'axios';
import { API_BASE_URL } from '../configs/AppConfig';

const http = axios.create({
  baseURL: API_BASE_URL,
});

http.interceptors.request.use(
  async function (config: AxiosRequestConfig): Promise<AxiosRequestConfig> {
    config.headers = { ...config.headers, Authorization: `Token ${process.env.REACT_APP_API_KEY}` };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch,
};

export default httpService;
