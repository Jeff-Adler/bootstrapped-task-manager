import React, { useState, useContext, createContext } from 'react';
import { postLogin, postLogout, postSignup } from 'services/auth.service';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registered, setIsRegistered] = useState(false);
  const [error, setError] = useState(false);

  const login = async (email, password) => {
    try {
      const response = await postLogin(email, password);

      setUser(response.data);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const logout = async (email, password) => {
    try {
      const response = await postLogout(user.email, user.password);

      setUser(null);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const signup = async (email, password) => {
    try {
      await postSignup(email, password);

      setIsRegistered(true);
      setError(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setError(true);
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, registered, login, logout, signup }}>{children}</AuthContext.Provider>
  );
};
