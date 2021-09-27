import React, { useState, useEffect } from 'react';
import { getNodeText } from '@testing-library/dom';
import axios from 'axios';
import 'App.css';
import { TaskContainer } from 'containers/Task.container';
import { loginUser } from 'services/auth.service';
import { ProfilePage } from 'components/ProfilePage';
import { getTasks } from 'services/task.service';
import { LoginForm } from 'components/LoginForm';

export default function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const loginSubmitHandler = async (email, password) => {
    try {
      const response = await loginUser(email, password);

      setUser(response.data);
    } catch (error) {
      setError(true);
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
          <LoginForm loginSubmitHandler={loginSubmitHandler} error={error} />
        </>
      )}
    </div>
  );
}
