export const TaskList = ({ tasks }) => {
  const mapTasks = () => {
    return tasks.map((task) => {
      return <li key={task.id}>{task.description}</li>;
    });
  };

  return <ol>{mapTasks()}</ol>;
};
