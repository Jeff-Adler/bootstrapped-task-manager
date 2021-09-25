export const TaskList = (props) => {
  const { tasks } = props;

  const mapTasks = () => {
    return tasks.map((task) => {
      return <li key={task.id}>{task.description}</li>;
    });
  };

  return <ol>{mapTasks()}</ol>;
};
