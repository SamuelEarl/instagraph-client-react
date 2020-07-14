import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { auth } from '@/init-firebase';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER } from '@/graphql/server/api';
import Button from '@/components/Button';
// Styles are in the "AuthLayout.global.scss" file

const RegisterForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingMsg, setLoadingMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [createUser] = useMutation(CREATE_USER);

  const handleRegister = async (e) => {
    try {
      e.preventDefault();

      setLoadingMsg("Loading...");

      const account = await auth.createUserWithEmailAndPassword(
        email.trim(),
        password.trim()
      );
      console.log("GOOGLE AUTH ACCOUNT:", account);

      // Create a user node in Dgraph. `account.user.uid` is the user ID from Firebase Auth.
      const user = await createUser({
        variables: {
          // NOTE: You can comment one of these fields out to throw an error and test for errors.
          userId: account.user.uid,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
        }
      });

      // TODO: If there is an error creating the user in Dgraph, then delete the user in Firebase Auth.

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

      // Instead, after successful registration, redirect user to the Log In page.
      navigate('/login');
    }
    catch(err) {
      setLoadingMsg('');
      console.error("REGISTRATION ERROR:", err.message);
      if (err.message === "GraphQL error: must be defined") {
        setErrorMsg("All fields are required");
      }
      else if (err.message === `GraphQL error: couldn't rewrite query for mutation addUser because id ${email.trim()} already exists for type User`) {
        setErrorMsg(`A user with the email "${email.trim()}" already exists. Please use a different email.`);
      }
      else {
        setErrorMsg(err.message);
      }
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
        <Link to="/login">Log Into Your Account</Link>
      </div>

      {/* If an error message exists, then display it to the user. */}
      {errorMsg ? <div className="errorMsg">{errorMsg}</div> : null}
    </form>
  );
};

export default RegisterForm;
