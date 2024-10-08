import axios from 'axios';
import { baseURL } from './config';

const api = axios.create({
  baseURL: baseURL
});

async function getAuth(url: string, data?: any) {
  return await api.get(url, {
    ...data,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

async function postAuth(url: string, data?: any) {
  return await api.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export const authApi = {
  getAuth,
  postAuth,
};
