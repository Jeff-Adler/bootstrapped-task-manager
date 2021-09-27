export const displayErrorMessage = (error, message) => {
  if (error) {
    return <h3>{message}</h3>;
  }
  return null;
};
