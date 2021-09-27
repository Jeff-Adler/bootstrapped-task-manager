import axios from 'axios';

export const loginUser = async (email, password) => {
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

export const postSignup = async (email, password) => {
  const response = await axios.post(
    `/auth/register`,
    {
      email,
      password,
    },
    { withCredentials: true }
  );
  return response;
};
