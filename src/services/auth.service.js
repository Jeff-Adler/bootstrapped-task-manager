import axios from 'axios';
import * as config from '../config.js';

const { api_url, api_port } = config;

export const login = async (email, password) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${api_url}${api_port}/auth/login`,
      data: {
        email,
        password,
      },
      withCredentials: true,
    });
    console.log(response);
    const user = response.data;
    return user;
  } catch (error) {
    console.error(error);
  }
};
