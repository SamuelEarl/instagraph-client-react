import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { SIGN_IN } from '@/graphql/server/api';
import { v4 as uuidv4 } from 'uuid';
import Button from '@/components/Button';
// Styles are in the "AuthLayout.global.scss" file

const SignInForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [signIn, { data, loading, error }] = useMutation(SIGN_IN);

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      const user = await signIn({
        variables: {
          email: email.trim(),
          password: password.trim(),
          sessionId: uuidv4(), // The sessionId should be generated on the server. I will take care of that when I refactor the code to use custom resolvers.
        }
      });

      // TODO: Store user object from response in ApolloClient's cache.
      // code goes here...
      console.log("SIGNED IN USER:", user);

      // Reset the input fields back to their original values.
      setEmail('');
      setPassword('');
      setErrorMsg('');

      // After successful sign in, redirect user to the "Dashboard" page.
      navigate('/app/dashboard');
    }
    catch(err) {
      if (err.message === "GraphQL error: must be defined") {
        setErrorMsg("All fields are required");
      }
      else {
        setErrorMsg(err.message);
      }
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
        <Link to="/register">Register For Account</Link>
        <Link to="/forgot-password">Forgot Password</Link>
      </div>

      {/* If an error message exists, then display it to the user. */}
      {errorMsg ? <div className="errorMsg">{errorMsg}</div> : null}
    </form>
  );
};

export default SignInForm;
