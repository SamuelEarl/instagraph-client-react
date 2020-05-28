import React, { useState } from 'react';
import Button from '@/components/Button';
import styles from "./Login.module.scss";

const Login = () => {
  const [selectedForm, setSelectedForm] = useState('loginForm');
  let displayForm;

  const handleLoginSubmit = () => {
    return "Logged in";
  }

  const handleRegisterSubmit = () => {
    return "Registered";
  }

  const handleForgotPasswordSubmit = () => {
    return "Forgot password";
  }

  const loginForm = (
    <form onSubmit={handleLoginSubmit}>
      <h1>Welcome Back</h1>

      <input type="text" placeholder="Email" />

      <input type="password" placeholder="Password" />

      <Button size="fullWidth">Log In</Button>

      <div className="switchForm">
        <p onClick={() => setSelectedForm('registerForm')}>Create an Account</p>
        <p onClick={() => setSelectedForm('forgotPasswordForm')}>Forgot Password</p>
      </div>
    </form>
  );

  const registerForm = (
    <form onSubmit={handleRegisterSubmit}>
      <h1>Get Started</h1>

      <input type="text" placeholder="First Name" />

      <input type="text" placeholder="Last Name" />

      <input type="text" placeholder="Email" />

      <input type="password" placeholder="Password" />

      <Button>Sign Up</Button>

      <div className="switchForm">
        <p onClick={() => setSelectedForm('loginForm')}>Back to Log In</p>
      </div>
    </form>
  );

  const forgotPasswordForm = (
    <form onSubmit={handleForgotPasswordSubmit}>
      <div>
        <h1>Reset Password</h1>
        <p>We will send you an email to reset your password</p>

        <input type="text" placeholder="Email" />

        <Button>Submit</Button>

        <div className="switchForm">
          <p onClick={() => setSelectedForm('loginForm')}>Back to Log In</p>
        </div>
      </div>

    </form>
  );

  const passwordResetSuccess = (
    <div>
      <h1>Email Sent</h1>
      <p>Check your email for a link to reset your password.</p>
      <Button>Back to login</Button>
    </div>
  );

  if (selectedForm === 'loginForm') {
    displayForm = loginForm;
  }
  if (selectedForm === 'registerForm') {
    displayForm = registerForm;
  }
  if (selectedForm === 'forgotPasswordForm') {
    displayForm = forgotPasswordForm;
  }
  if (selectedForm === 'passwordResetSuccess') {
    displayForm = passwordResetSuccess;
  }

  return (
    <div className={styles.login}>
      <div>
        <h1>Instagraph</h1>
        <p>Welcome to the Instagraph sample social media web app powered by React.js, GraphQL and Dgraph.</p>
        <p>Build this project by following "<a href="https://dzone.com/articles/" target="_blank">Dgraph: The Perfect Database for Front-end Developers</a>".</p>
      </div>
      <div>
        {displayForm}
      </div>
    </div>
  );
};

export default Login;
