import { useState } from 'react';
import * as config from '../config.js';

const { test_email, test_password } = config;

export const LoginForm = ({ loginSubmitHandler, errorMessage }) => {
  const [email, setEmail] = useState(test_email);
  const [password, setPassword] = useState(test_password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await loginSubmitHandler(email, password);
  };

  const displayErrorMessage = () => {
    if (errorMessage) {
      return <h3>Invalid credentials</h3>;
    }
    return null;
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
      {displayErrorMessage()}
    </div>
  );
};
