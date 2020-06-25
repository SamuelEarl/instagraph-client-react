import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@/components/Button';
// Styles are in the "AuthLayout.global.scss" file

const ForgotPasswordForm = (props) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Forgot Password", email.trim());
    return "Forgot password";
  }

  return (
    <form onSubmit={handleForgotPassword}>
      <div>
        <h1 className="authHeader">Reset Password</h1>
        <p className="authContent">We will send you an email to reset your password</p>

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Button size="fullWidth">Submit</Button>

        <div className="switchForm">
          <NavLink to="/sign-in" exact>Back To Sign In</NavLink>
        </div>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
