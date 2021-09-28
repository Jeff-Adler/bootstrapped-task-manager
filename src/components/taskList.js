import { Link, withRouter, useRouteMatch } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

export const TaskList = ({ tasks }) => {
  let { path } = useRouteMatch();

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
    <div className="taskContainer center">
      <h1>Task</h1>
      <ListGroup>{mapTasks()}</ListGroup>
    </div>
  );
};
