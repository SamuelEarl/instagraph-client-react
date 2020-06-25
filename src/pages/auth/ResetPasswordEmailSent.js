import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@/components/Button';
// Styles are in the "AuthLayout.global.scss" file

const PasswordResetSuccess = () => {
  return (
    <div>
      <h1 className="authHeader">Email Sent</h1>
      <p className="authContent">Check your email for a link to reset your password.</p>

      <NavLink to="/sign-in" exact>Back To Sign In</NavLink>
    </div>
  );
};

export default PasswordResetSuccess;
