import React, {useState} from 'react'
import {postSignup} from 'services/auth.service'
import { displayErrorMessage } from 'helpers/displayErrorMessage';

export const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error,setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true)
      await postSignup(email, password);

      setIsRegistered(true)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
      setError(true)
    }

  };

  return (
    <div className="signup">
      <h1>Signup</h1>
      {isRegistered ? (<><h3>You're signed up!</h3></>) : (      
        <>
          <form onSubmit={{async (e) => await handleSubmit(e)}}>
            <label htmlFor="email">email</label>
            <input id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

            <label htmlFor="password">password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

            <button type="submit" value="Signup">
              Signup
            </button>
          </form>
          {displayErrorMessage(error, 'Signup failed')}
        </>
      )}
    </div>
  );
};
