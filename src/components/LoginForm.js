import { useState } from 'react';
import * as config from 'config.js';
import { displayErrorMessage } from 'helpers/displayErrorMessage';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, NavLink } from 'reactstrap';

const { test_email, test_password } = config;

export const LoginForm = ({ loginSubmitHandler, error }) => {
  const [email, setEmail] = useState(test_email);
  const [password, setPassword] = useState(test_password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await loginSubmitHandler(email, password);
  };

  return (
    <div className="loginPage">
      <h1>Login</h1>
      <div className="center">
        <Form id="loginForm" onSubmit={async (e) => await handleSubmit(e)} style={{ width: '300px' }}>
          <FormGroup>
            <Label for="email" className="mr-sm-2">
              Email
            </Label>
            <Input
              style={{ width: '300px' }}
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="password" className="mr-sm-2">
              Password
            </Label>
            <Input
              style={{ width: '300px' }}
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <br />
          <Button type="submit" value="Login">
            Submit
          </Button>
        </Form>
      </div>
      <br />
      <p>Not yet a user?</p> <Link to="/signup">Sign up</Link>
      {displayErrorMessage(error, 'Invalid Credentials')}
    </div>
  );
};
