import React, { useState } from 'react';
import Button from '@/components/Button';
import styles from "./PasswordResetSuccess.module.scss";

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
