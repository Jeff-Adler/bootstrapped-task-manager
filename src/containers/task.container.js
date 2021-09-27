import React, { useState, useEffect } from 'react';
import { getTasks } from 'services/task.service';
import { TaskList } from 'components/TaskList';
import { displayErrorMessage } from 'helpers/displayErrorMessage';

export const TaskContainer = (props) => {
  const [tasks, setTasks] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = async () => {
    try {
      setIsFetching(true);
      const response = await getTasks();

      setIsFetching(false);
      setTasks(response.data);
    } catch (error) {
      console.error(error);
      setIsFetching(false);
      setError(true);
    }
  };

  return (
    <div className="task_container">
      <button onClick={handleClick}>Get Tasks</button>
      {isFetching ? (
        <>
          <h3>Retrieving tasks</h3>
        </>
      ) : (
        ''
      )}
      {error ? <>{displayErrorMessage(error, 'Could not retrieve tasks')}</> : ''}
      {tasks ? (
        <div>
          <TaskList tasks={tasks} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
