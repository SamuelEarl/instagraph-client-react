import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { auth } from '@/init-firebase';
import Button from '@/components/Button';
// Styles are in the "AuthLayout.global.scss" file

const ForgotPasswordForm = (props) => {
  const [email, setEmail] = useState('');
  const [loadingMsg, setLoadingMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleForgotPassword = async (e) => {
    try {
      e.preventDefault();

      setLoadingMsg("Loading...");

      await auth.sendPasswordResetEmail(email.trim());

      // Reset the input fields back to their original values.
      setEmail('');
      setLoadingMsg('');
      setErrorMsg('');

      // Redirect user to the "email sent" page.
      navigate('/reset-password-email-sent');
    }
    catch(err) {
      setLoadingMsg('');
      console.error("FORGOT PASSWORD ERROR:", err);
      setErrorMsg(err.message);
    }
  }

  return (
    <form onSubmit={handleForgotPassword}>
      <h1 className="authHeader">Reset Password</h1>
      <p className="authContent">We will send you an email to reset your password</p>

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      {/* If a loading message exists, then show it to the user otherwise show the "Log In" button */}
      {
        loadingMsg ?
        <div className="loadingMsg">{loadingMsg}</div> :
        <Button size="fullWidth">Submit</Button>
      }

      <div className="switchForm">
        <Link to="/login">Back To Login</Link>
      </div>

      {/* If an error message exists, then display it to the user. */}
      {errorMsg ? <div className="errorMsg">{errorMsg}</div> : null}
    </form>
  );
};

export default ForgotPasswordForm;
