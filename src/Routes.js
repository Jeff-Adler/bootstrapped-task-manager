import { Switch, Route, Redirect } from 'react-router';
import { Warning404 } from 'components/Warning404';
import { LoginForm } from 'components/LoginForm';
import { SignupForm } from 'components/SignupForm';
import TaskContainer from 'containers/Task.container';
import { Task } from 'components/Task';
import { Logout } from 'components/Logout';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/tasks" component={TaskContainer} />

      <Redirect exacts from="/" to="/tasks" />

      <Route component={404} component={Warning404} />
    </Switch>
  );
};
