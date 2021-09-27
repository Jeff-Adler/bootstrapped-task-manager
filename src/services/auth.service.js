import axios from 'axios';
import * as config from '../config.js';

const { api_url, api_port } = config;

export const loginRequest = async (email, password) => {
  const response = await axios.post(
    `/auth/login`,
    {
      email,
      password,
    },
    { withCredentials: true }
  );
  return response;
};
