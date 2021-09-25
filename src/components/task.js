export const getTasks = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8080/tasks',
    });
    console.log(response.data);
    setTasks(response.data);
  } catch (error) {
    console.error(error);
  }
};
