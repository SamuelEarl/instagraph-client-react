import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { useQuery, useMutation } from 'urql';
import { REGISTER } from '@/graphql/api';
import { v4 as uuidv4 } from 'uuid';
import Button from '@/components/Button';
// Styles are in the "AuthLayout.global.scss" file

const RegisterForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [registerResult, register] = useMutation(REGISTER);

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const user = await register({
        // Comment one of these fields out to throw an error and test for errors.
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        password: password.trim(),
        sessionId: '',
      });
      // Reset the input fields back to their original values.
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setError('');

      console.log("SIGNED UP USER:", user);

      if (user.error) {
        throw Error(user.error);
      }

      // After successful registration, redirect user to the "verification email sent" page.
      // I won't show how to do this in this tutorial, but you can try this on your own.
      // props.history.push('/verification-email-sent');

      // Instead, after successful registration, redirect user to the Sign In page.
      props.history.push('/sign-in');
    }
    catch(err) {
      if (err.message === "[GraphQL] must be defined") {
        setError("All fields are required");
      }
      else if (err.message === `[GraphQL] couldn't rewrite query for mutation addAuthor because id ${email.trim()} already exists for type Author`) {
        setError(`A user with the email "${email.trim()}" already exists. Please use a different email.`);
      }
      else {
        setError(err.message);
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

      <Button size="fullWidth">Register</Button>

      <div className="switchForm">
        <NavLink to="/sign-in" exact>Back To Sign In</NavLink>
      </div>

      {/* If an error message exists, then display it to the user. */}
      {error ? <div className="error">{error}</div> : null}
    </form>
  );
};

export default withRouter(RegisterForm);
