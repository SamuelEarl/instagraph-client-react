import React, { useState } from 'react';
import { useQuery, useMutation } from 'urql';
import { LOG_IN } from '@/graphql/api';
import { withRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from '@/components/Button';

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginResult, login] = useMutation(LOG_IN);

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const user = await login({
        email: email.trim(),
        password: password.trim(),
        sessionId: uuidv4(), // The sessionId should be generated on the server. I will take care of that when I refactor the code to use custom resolvers.
      });
      // Reset the input fields back to their original values.
      setEmail('');
      setPassword('');
      setError('');

      // Store user object from response in ApolloClient's local app state.
      // code goes here...
      console.log("LOGGED IN USER:", user);

      if (user.error) {
        throw Error(user.error);
      }

      // After successful login, redirect user to the "Dashboard" page.
      props.history.push('/dashboard');
    }
    catch(err) {
      setError(err.message);
      console.error("LOGIN ERROR:", err.message);
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h1 className="authHeader">Welcome Back</h1>

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <Button size="fullWidth">Log In</Button>

      <div className="switchForm">
        <p onClick={() => props.setSelectedForm('signUpForm')}>Create an Account</p>
        <p onClick={() => props.setSelectedForm('forgotPasswordForm')}>Forgot Password</p>
      </div>
    </form>
  );
};

export default withRouter(LoginForm);
