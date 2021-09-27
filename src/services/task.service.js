import axios from 'axios';
import * as config from '../config.js';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

const { api_url, api_port } = config;

export const getTasks = async () => {
  try {
    const response = await axios.get(`/tasks/`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
