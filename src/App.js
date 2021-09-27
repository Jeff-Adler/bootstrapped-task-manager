import React, { useState, useEffect } from 'react';
import { getNodeText } from '@testing-library/dom';
import axios from 'axios';
import 'App.css';
import { TaskContainer } from 'containers/task.container';
import { loginUser } from 'services/auth.service';
import { ProfilePage } from 'components/ProfilePage';
import { getTasks } from 'services/task.service';
import { LoginForm } from 'components/LoginForm';

export default function App() {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const loginSubmitHandler = async (email, password) => {
    try {
      const response = await loginUser(email, password);

      setUser(response.data);
    } catch (error) {
      setErrorMessage('Invalid credetials');
    }
  };

  return (
    <div className="App">
      {user ? (
        <>
          <ProfilePage user={user} />
          <TaskContainer />
        </>
      ) : (
        <>
          <LoginForm loginSubmitHandler={loginSubmitHandler} errorMessage={errorMessage} />
        </>
      )}
    </div>
  );
}
