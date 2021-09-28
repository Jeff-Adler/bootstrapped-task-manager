import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { getTask } from 'services/task.service';

export const Task = () => {
  const { id } = useParams();

  const [task, setTask] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsFetching(true);
        const response = await getTask(id);

        setTask(response.data);
        setIsFetching(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setIsFetching(false);
      }
    })();
  }, []);

  return (
    <div className="taskWrapper">
      {isFetching || task === null ? (
        <>
          <h3>Retrieving Task</h3>
        </>
      ) : (
        <ListGroup>
          <ListGroupItem>TESTING</ListGroupItem>

          <ListGroupItem>{task.description}</ListGroupItem>
          <ListGroupItem>Completed: {task.completed}</ListGroupItem>
        </ListGroup>
      )}
    </div>
  );
};
