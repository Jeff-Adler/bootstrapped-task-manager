export const TaskList = ({ tasks }) => {
  const mapTasks = () => {
    if (tasks.length) {
      return tasks.map((task) => {
        return <li key={task.id}>{task.description}</li>;
      });
    }
    return 'No tasks to show';
  };

  return <ol>{mapTasks()}</ol>;
};
