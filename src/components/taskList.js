import { ListGroup, ListGroupItem } from 'reactstrap';

export const TaskList = ({ tasks }) => {
  const mapTasks = () => {
    if (tasks.length) {
      return tasks.map((task) => {
        return <ListGroupItem key={task.id}>{task.description}</ListGroupItem>;
      });
    }
    return 'No tasks to show';
  };

  return (
    <div className="taskContainer center">
      <ListGroup>{mapTasks()}</ListGroup>
    </div>
  );
};
