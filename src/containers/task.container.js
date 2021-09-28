import React, { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { getTasks } from 'services/task.service';
import { TaskList } from 'components/TaskList';
import { displayErrorMessage } from 'helpers/displayErrorMessage';
import { Task } from 'components/Task';

const TaskContainer = (props) => {
  let { path, url } = useRouteMatch();

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

  return (
    <div className="task_container">
      {isFetching ? (
        <>
          <h3>Retrieving tasks</h3>
        </>
      ) : (
        <div>
          <Switch>
            <Route exact path={`${path}/:id`} render={() => <Task tasks={tasks} />} />
            <Route exact path={`${path}/`} render={() => <TaskList tasks={tasks} />} />
          </Switch>
        </div>
      )}
      {error ? <>{displayErrorMessage(error, 'Could not retrieve tasks')}</> : ''}
    </div>
  );
};

export default withRouter(TaskContainer);
