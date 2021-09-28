import { Logout } from 'components/Logout';
import NavBar from 'components/NavBar';
import { Routes } from 'Routes';

export const AuthorizedApp = () => {
  return (
    <div className="logoutWrapper">
      <NavBar />
      <Routes />
    </div>
  );
};
