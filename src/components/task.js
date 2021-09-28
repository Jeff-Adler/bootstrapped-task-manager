import { useParams } from 'react-router';
import { ListGroup, ListGroupItem } from 'reactstrap';

export const Task = ({ tasks }) => {
  let { id } = useParams();

  const displayTask = () => {
    const task = tasks.filter((task) => {
      return task.id === id;
    });

    if (task) {
      return (
        <div>
          <ListGroupItem>{task.description}</ListGroupItem>
          <ListGroupItem>Completed: {task.completed}</ListGroupItem>
        </div>
      );
    }

    return 'Could not find task';
  };

  return (
    <div className="taskWrapper">
      <ListGroup>{displayTask()}</ListGroup>
    </div>
  );
};
