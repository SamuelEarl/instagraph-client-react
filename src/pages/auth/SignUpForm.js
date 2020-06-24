import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { SIGN_UP } from '@/graphql/api';
import { v4 as uuidv4 } from 'uuid';
import Button from '@/components/Button';

const SignUpForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signUpMutation, signUpStatus] = useMutation(SIGN_UP);

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();
      const user = await signUpMutation({
        variables: {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          password: password.trim(),
          sessionId: '',
        }
      });
      // Reset the input fields back to their original values.
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setError('');

      console.log("SIGNED UP USER:", user);

      // After successful sign up, redirect user to the "verification email sent" page.
      // I won't show how to do this in this tutorial, but you can try this on your own.
      // props.history.push('/verification-email-sent');
    }
    catch(err) {
      if (err.message === `GraphQL error: couldn't rewrite query for mutation addAuthor because id ${email.trim()} already exists for type Author`) {
        setError(`A user with the email "${email.trim()}" already exists. Please use a different email.`);
      }
      else {
        setError(err.message);
      }
      console.error("SIGN UP ERROR:", err.message);
    }
  }

  const handleCreateTestUser = async (e) => {
    try {
      // e.preventDefault();
      const testUser = await signUpMutation({
        variables: {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          password: password.trim(),
          sessionId: '',
        }
      });
      // Reset the input fields back to their original values.
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setError('');

      console.log("TEST USER:", testUser);

      // After successful sign up, redirect user to the login page.
      props.setSelectedForm('loginForm');
    }
    catch(err) {
      if (err.message === `GraphQL error: couldn't rewrite query for mutation addAuthor because id ${email.trim()} already exists for type Author`) {
        setError(`A user with the email "${email.trim()}" already exists. Please use a different email.`);
      }
      else {
        setError(err.message);
      }
      console.error("CREATE TEST USER ERROR:", err.message);
    }
  }

  return (
    <div>
      {/* <form> */}
      <form onSubmit={handleSignUp}>
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

        <Button size="fullWidth">Sign Up</Button>
      </form>

        <br />
        <button onClick={() => handleCreateTestUser()}>Create Test User</button>

        <div className="switchForm">
          <p onClick={() => props.setSelectedForm('loginForm')}>Back to Log In</p>
        </div>

        {/* If an error message exists, then display it to the user. */}
        {error ? <div className="error">{error}</div> : null}
      {/* </form> */}
    </div>
  );
};

export default SignUpForm;
