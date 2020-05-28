import React, { useState } from 'react';
import Button from '@/components/Button';

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Log In", email.trim(), password.trim());
    return "Logged in";
  }

  return (
    <form onSubmit={handleLogin}>
      <h1 className="authHeader">Welcome Back</h1>

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

      <Button size="fullWidth">Log In</Button>

      <div className="switchForm">
        <p onClick={() => props.setSelectedForm('registerForm')}>Create an Account</p>
        <p onClick={() => props.setSelectedForm('forgotPasswordForm')}>Forgot Password</p>
      </div>
    </form>
  );
};

export default LoginForm;
