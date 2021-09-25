import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

export default function App() {
  const [tasks, setTasks] = useState();
  useEffect(() => {});

  async function getTasks() {
    try {
      const response = await axios({
        method: 'get',
        url: 'localhost:3000/tasks',
      });

      const response = await axios.get('localhost:3000/tasks');

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <Tasks />
    </div>
  );
}
