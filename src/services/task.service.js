import axios from 'axios';
import * as config from '../config.js';

const { api_url, api_port } = config;

export const getTasks = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: `${api_url}${api_port}/tasks`,
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
