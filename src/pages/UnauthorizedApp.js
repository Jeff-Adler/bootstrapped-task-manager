import { LoginForm } from 'components/LoginForm';
import { SignupForm } from 'components/SignupForm';
import { Route, Switch, Redirect } from 'react-router';

export const UnauthorizedApp = () => {
  return (
    <div className="loginWrapper center">
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Redirect exacts from="/" to="/login" />
        <Route component={404} component={Warning404} />
      </Switch>
    </div>
  );
};
