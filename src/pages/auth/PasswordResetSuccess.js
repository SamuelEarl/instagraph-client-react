import React from 'react';
import Button from '@/components/Button';

const PasswordResetSuccess = () => {
  return (
    <div>
      <h1 className="authHeader">Email Sent</h1>
      <p className="authContent">Check your email for a link to reset your password.</p>
      <Button>Back to login</Button>
    </div>
  );
};

export default PasswordResetSuccess;
