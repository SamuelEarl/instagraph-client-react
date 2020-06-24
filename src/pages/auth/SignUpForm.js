import React, { useState } from 'react';
import Button from '@/components/Button';

const SignUpForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registered", firstName.trim(), lastName.trim(), email.trim(), password.trim());
    return "Registered";
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

      <Button size="fullWidth">Sign Up</Button>

      <div className="switchForm">
        <p onClick={() => props.setSelectedForm('loginForm')}>Back to Log In</p>
      </div>
    </form>
  );
};

export default SignUpForm;
