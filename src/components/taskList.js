import React, { useState, useEffect } from 'react';
import { Link, withRouter, useRouteMatch } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { getTasks } from 'services/task.service';

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
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
    })();
  }, []);

  const mapTasks = () => {
    if (tasks.length) {
      return tasks.map((task) => {
        return (
          <ListGroupItem tag={Link} to={`${path}/${task.id}`} key={task.id}>
            {task.description}
          </ListGroupItem>
        );
      });
    }
    return 'No tasks to show';
  };

  return (
    <div className="taskListWrapper center">
      {isFetching ? (
        <>
          <h3>Retrieving tasks</h3>
        </>
      ) : (
        <div>{mapTasks()}</div>
      )}
    </div>
  );
};
