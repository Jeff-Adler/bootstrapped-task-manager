import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { TaskContainer } from './containers/task.container';
import { loginRequest } from './services/auth.service';
import { getNodeText } from '@testing-library/dom';
import { Profile } from './components/profile';
import { getTasks } from './services/task.service';
import { Login } from './components/login';

export default function App() {
  // const [jwt, setJwt] = useState(storedJwt || null);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const loginSubmitHandler = async (email, password) => {
    try {
      const response = await loginRequest(email, password);

      if (response.status >= 200 && response.status < 300) {
        setUser(response.data);
      }
    } catch (error) {
      setErrorMessage('Invalid credetials');
    }
  };
  // useEffect(() => {
  //   (async () => {
  //     const user = await login(test_email, test_password);
  //     setUser(user);
  //   })();
  // }, []);

  return (
    <div className="App">
      {user ? (
        <>
          <Profile user={user} />
          <TaskContainer />
        </>
      ) : (
        <>
          <Login loginSubmitHandler={loginSubmitHandler} errorMessage={errorMessage} />
        </>
      )}
    </div>
  );
}
