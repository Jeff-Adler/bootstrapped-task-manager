import React, { useState, useEffect } from 'react';
import { getTasks } from '../services/task.service';
import { TaskList } from '../components/taskList';

export const TaskContainer = (props) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    (async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    })();
  }, []);

  return (
    <div className="task_container">
      {tasks ? (
        <div>
          <TaskList tasks={tasks} />
        </div>
      ) : (
        <div>
          <h1>Retrieving tasks</h1>
        </div>
      )}
    </div>
  );
};
