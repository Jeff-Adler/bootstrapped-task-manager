import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { getNodeText } from '@testing-library/dom';
import axios from 'axios';
import 'App.css';
import { TaskContainer } from 'containers/Task.container';
import { loginUser } from 'services/auth.service';
import { ProfilePage } from 'components/ProfilePage';
import { getTasks } from 'services/task.service';
import { LoginForm } from 'components/LoginForm';
import { Switch, Route, Redirect } from 'react-router';
import { Warning404 } from 'components/Warning404';
import { LoginForm } from 'components/LoginForm';
import { SignupForm } from 'components/SignupForm';
import { TaskContainer } from 'containers/Task.container';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const loginSubmitHandler = async (email, password) => {
    try {
      const response = await loginUser(email, password);

      setUser(response.data);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="App">
      {user ? (
        <div>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/tasks" component={TaskContainer} />

            <Redirect exacts from="/" to="/login" />

            <Route component={404} component={Warning404} />
          </Switch>
        </div>
      ) : (
        <div>
          <LoginForm loginSubmitHandler={loginSubmitHandler} error={error} />
        </div>
      )}
    </div>
  );
}

export default withRouter(App);
