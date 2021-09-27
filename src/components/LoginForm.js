import { useState } from 'react';
import * as config from 'config.js';
import { displayErrorMessage } from 'helpers/displayErrorMessage';

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
      <form id="login" onSubmit={async (e) => await handleSubmit(e)}>
        <label htmlFor="email">email</label>
        <input id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

        <label htmlFor="password">password</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

        <button type="submit" value="Login">
          Login
        </button>
      </form>
      {displayErrorMessage(error, 'Invalid Credentials')}
    </div>
  );
};
