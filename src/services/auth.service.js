import axios from 'axios';
import * as config from '../config.js';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

const { api_url, api_port } = config;

export const login = async (email, password) => {
  try {
    const response = await axios.post(
      `auth/login`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );

    const user = response.data;
    return user;
  } catch (error) {
    console.error(error);
  }
};
