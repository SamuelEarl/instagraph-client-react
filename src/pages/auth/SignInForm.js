import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery, useMutation } from 'urql';
import { SIGN_IN } from '@/graphql/api';
import { withRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from '@/components/Button';
// Styles are in the "AuthLayout.global.scss" file

const SignInForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signInResult, signIn] = useMutation(SIGN_IN);

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      const user = await signIn({
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
      console.log("SIGNED IN USER:", user);

      if (user.error) {
        throw Error(user.error);
      }

      // After successful sign in, redirect user to the "Dashboard" page.
      props.history.push('/dashboard');
    }
    catch(err) {
      setError(err.message);
      console.error("SIGN IN ERROR:", err.message);
    }
  }

  return (
    <form onSubmit={handleSignIn}>
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

      <Button size="fullWidth">Sign In</Button>

      <div className="switchForm">
        <NavLink to="/register" exact>Register For Account</NavLink>
        <NavLink to="/forgot-password" exact>Forgot Password</NavLink>
      </div>
    </form>
  );
};

export default withRouter(SignInForm);
