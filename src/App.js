import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { TaskList } from './components/taskList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:8080/tasks',
      });
      console.log(response.data);
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <TaskList tasks={tasks} />
    </div>
  );
}
