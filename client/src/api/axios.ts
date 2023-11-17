import AxiosStatic from 'axios';

export const axios = AxiosStatic.create({
  baseURL: 'http://localhost:4000/api',
});
