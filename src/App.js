import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { TaskList } from './components/taskList';
import { login } from './services/auth.service';
import { getNodeText } from '@testing-library/dom';
import { Profile } from './components/profile';
import { getTasks } from './services/task.service';
import * as config from './config.js';

const { test_email, test_password } = config;

export default function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    (async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    })();
  }, []);

  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const user = await login(test_email, test_password);
      setUser(user);
    })();
  }, []);

  return (
    <div className="App">
      {user && tasks && tasks.length ? (
        <>
          <Profile user={user} />
          <TaskList tasks={tasks} />
        </>
      ) : (
        <>
          <h1>Loading</h1>
        </>
      )}
    </div>
  );
}
