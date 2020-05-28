import React, { useState } from 'react';
import Button from '@/components/Button';
import styles from "./ForgotPasswordForm.module.scss";

const ForgotPasswordForm = (props) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Forgot Password", email);
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

        <Button>Submit</Button>

        <div className="switchForm">
          <p onClick={() => props.setSelectedForm('loginForm')}>Back to Log In</p>
        </div>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
