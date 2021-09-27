import { Switch, Route, Redirect } from 'react-router';
import { Warning404 } from 'components/Warning404';
import { LoginForm } from 'components/LoginForm';
import { SignupForm } from 'components/SignupForm';
import { TaskContainer } from 'containers/Task.container';

export const Routes = () => {
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/signup" component={SignupForm} />
    <Route exact path="/tasks" component={TaskContainer}

    <Redirect exacts from="/" to="/login" />

    <Route component={404} component={Warning404} />
  </Switch>;
};
