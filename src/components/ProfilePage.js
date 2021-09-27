export const ProfilePage = (props) => {
  const { email, password } = props.user;

  return (
    <div className="profile">
      <h1>Profile Page</h1>
      <h3>{email}</h3>
      <h3>{password}</h3>
    </div>
  );
};
