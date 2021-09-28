import React, { useState } from 'react';
import { postSignup } from 'services/auth.service';
import { displayErrorMessage } from 'helpers/displayErrorMessage';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, NavLink } from 'reactstrap';

export const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await postSignup(email, password);

      setIsRegistered(true);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setError(true);
    }
  };

  return (
    <div className="signupWrapper">
      <h1>Signup</h1>
      {isRegistered ? (
        <>
          <br />
          <h3>You're signed up!</h3>
          <br />
          <Link to="/login">Login?</Link>
        </>
      ) : (
        <>
          <div className="center">
            <Form id="signupForm" onSubmit={async (e) => await handleSubmit(e)} style={{ width: '300px' }}>
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
              <Button type="submit" value="Signup">
                Login
              </Button>
            </Form>
            <br />
          </div>
          <br />
          <p>Already a user?</p> <Link to="/login">Sign up</Link>
          <br />
          {displayErrorMessage(error, 'Signup failed')}
        </>
      )}
    </div>
  );
};
