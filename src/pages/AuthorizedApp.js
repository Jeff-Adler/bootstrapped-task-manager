import { Logout } from 'components/Logout';
import NavBar from 'components/NavBar';
import { Routes } from 'Routes';
import TaskContainer from 'containers/Task.container';
import { Warning404 } from 'components/Warning404';
import { TaskList } from 'components/TaskList';
import { displayErrorMessage } from 'helpers/displayErrorMessage';
import { Task } from 'components/Task';

export const AuthorizedApp = () => {
  return (
    <div className="logoutWrapper">
      <NavBar />
      <Switch>
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/tasks" component={TaskList} />
        <Route exact path="/tasks/:id" component={Task} />
        <Redirect exacts from="/" to="/tasks" />
        <Route component={404} component={Warning404} />
      </Switch>
    </div>
  );
};
