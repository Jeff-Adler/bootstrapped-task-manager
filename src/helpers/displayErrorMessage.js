export const displayErrorMessage = (error, message) => {
  if (error) {
    return <h3 style={{ color: 'red' }}>{message}</h3>;
  }
  return null;
};
