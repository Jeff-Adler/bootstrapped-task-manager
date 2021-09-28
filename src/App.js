import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { getNodeText } from '@testing-library/dom';
import axios from 'axios';
import 'App.css';
import TaskContainer from 'containers/Task.container';
import { postLogin, postLogout } from 'services/auth.service';
import { ProfilePage } from 'components/ProfilePage';
import { getTasks } from 'services/task.service';
import { Warning404 } from 'components/Warning404';
import { LoginForm } from 'components/LoginForm';
import { SignupForm } from 'components/SignupForm';
import NavBar from 'components/NavBar';
import { Logout } from 'components/Logout';
import { useAuth } from 'contexts/authContext';
import { UnauthorizedApp } from 'pages/UnauthorizedApp';
import { AuthorizedApp } from 'pages/AuthorizedApp';
import { Routes } from 'Routes';

function App() {
  const { user } = useAuth();

  return user ? <AuthorizedApp /> : <UnauthorizedApp />;

  // const [user, setUser] = useState(null);
  // const [error, setError] = useState(false);

  // const loginSubmitHandler = async (email, password) => {
  //   try {
  //     const response = await postLogin(email, password);

  //     setUser(response.data);
  //     setError;
  //     history.push('/tasks');
  //   } catch (error) {
  //     setError(true);
  //   }
  // };

  // const logoutSubmitHandler = async () => {
  //   try {
  //     const response = await postLogout(user.email, user.password);

  //     setUser(null);
  //     setError(false);
  //     history.push('/login');
  //   } catch (error) {
  //     setError(true);
  //   }
  // };

  // return (
  //   <div className="App">
  //     <NavBar />
  //     <Switch>
  //       <Route
  //         exact
  //         path="/login"
  //         render={() => <LoginForm user={user} loginSubmitHandler={loginSubmitHandler} error={error} />}
  //       />
  //       <Route exact path="/signup" component={SignupForm} />
  //       <Route
  //         exact
  //         path="/logout"
  //         render={() => <Logout logoutSubmitHandler={logoutSubmitHandler} user={user} error={error} />}
  //       />
  //       <Route exact path="/tasks" component={TaskContainer} />

  //       {/* <Redirect exacts from="/" to="/login" /> */}

  //       <Route component={404} component={Warning404} />
  //     </Switch>
  //   </div>
  // );
}

export default withRouter(App);
