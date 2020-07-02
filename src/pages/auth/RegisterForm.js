import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { useMutation } from '@apollo/react-hooks';
import { REGISTER } from '@/graphql/server/api';
import Button from '@/components/Button';
// Styles are in the "AuthLayout.global.scss" file

const RegisterForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingMsg, setLoadingMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [register, { data, loading, error }] = useMutation(REGISTER);

  const handleRegister = async (e) => {
    try {
      e.preventDefault();

      setLoadingMsg("Loading...");

      const user = await register({
        variables: {
          // Comment one of these fields out to throw an error and test for errors.
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          password: password.trim(),
        }
      });
      // Reset the input fields back to their original values.
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setLoadingMsg('');
      setErrorMsg('');

      console.log("REGISTERED USER:", user);

      // After successful registration, redirect user to the "Verification Email Sent" page.
      // I won't show how to do this in this tutorial, but you can try this on your own.
      // navigate('/verification-email-sent');

      // Instead, after successful registration, redirect user to the Sign In page.
      navigate('/sign-in');
    }
    catch(err) {
      setLoadingMsg('');
      if (err.message === "GraphQL error: must be defined") {
        setErrorMsg("All fields are required");
      }
      else if (err.message === `GraphQL error: couldn't rewrite query for mutation addAuthor because id ${email.trim()} already exists for type Author`) {
        setErrorMsg(`A user with the email "${email.trim()}" already exists. Please use a different email.`);
      }
      else {
        setErrorMsg(err.message);
      }
      console.error("REGISTRATION ERROR:", err.message);
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <h1 className="authHeader">Get Started</h1>

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />

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

      {/* If a loading message exists, then show it to the user otherwise show the "Register" button */}
      {
        loadingMsg ?
        <div className="loadingMsg">{loadingMsg}</div> :
        <Button size="fullWidth">Register</Button>
      }

      <div className="switchForm">
        <Link to="/sign-in">Sign In</Link>
      </div>

      {/* If an error message exists, then display it to the user. */}
      {errorMsg ? <div className="errorMsg">{errorMsg}</div> : null}
    </form>
  );
};

export default RegisterForm;
