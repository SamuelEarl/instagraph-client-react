import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import PasswordResetSuccess from './PasswordResetSuccess';
import styles from "./Auth.module.scss";
import "./Auth.scss";

const Auth = () => {
  const [selectedForm, setSelectedForm] = useState('loginForm');
  let displayForm;

  if (selectedForm === 'loginForm') {
    displayForm = <LoginForm setSelectedForm={setSelectedForm} />;
  }
  if (selectedForm === 'registerForm') {
    displayForm = <RegisterForm setSelectedForm={setSelectedForm} />;
  }
  if (selectedForm === 'forgotPasswordForm') {
    displayForm = <ForgotPasswordForm setSelectedForm={setSelectedForm} />;
  }
  if (selectedForm === 'passwordResetSuccess') {
    displayForm = <PasswordResetSuccess />;
  }

  return (
    <div className={styles.auth}>
      <div className={styles.leftCol}>
        <div className={styles.container}>
          <h1 className="authHeader">Instagraph</h1>
          <p className="authContent">Welcome to the Instagraph sample social media web app powered by React.js, GraphQL and Dgraph.</p>
          <p className="authContent">Build this project by following <a href="https://dzone.com/articles/" target="_blank">Dgraph: The Perfect Database for Front-end Developers</a>.</p>
        </div>
      </div>
      <div className={styles.rightCol}>
        <div className={styles.container}>
          {displayForm}
        </div>
      </div>
    </div>
  );
};

export default Auth;
