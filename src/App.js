import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { TaskContainer } from './containers/task.container';
import { login } from './services/auth.service';
import { getNodeText } from '@testing-library/dom';
import { Profile } from './components/profile';
import { getTasks } from './services/task.service';
import * as config from './config.js';

const { test_email, test_password } = config;

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const user = await login(test_email, test_password);
      setUser(user);
    })();
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
          <Profile user={user} />
          <TaskContainer />
        </>
      ) : (
        <>
          <h1>Loading</h1>
        </>
      )}
    </div>
  );
}
