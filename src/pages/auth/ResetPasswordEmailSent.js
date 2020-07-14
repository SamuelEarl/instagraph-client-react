import React from 'react';
import { Link } from '@reach/router';
import Button from '@/components/Button';
// Styles are in the "AuthLayout.global.scss" file

const PasswordResetSuccess = () => {
  return (
    <div>
      <h1 className="authHeader">Email Sent</h1>
      <p className="authContent">Check your email for a link to reset your password.</p>

      <Link to="/login">Log In</Link>
    </div>
  );
};

export default PasswordResetSuccess;
