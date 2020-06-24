import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import PasswordResetSuccess from './PasswordResetSuccess';
import styles from "./Auth.module.scss";
import "./Auth.scss";

const Auth = (props) => {
  console.log("AUTH PROPS:", props);
  const [selectedForm, setSelectedForm] = useState('loginForm');
  let displayForm;

  if (selectedForm === 'loginForm') {
    displayForm = <LoginForm setSelectedForm={setSelectedForm} />;
  }
  if (selectedForm === 'signUpForm') {
    displayForm = <SignUpForm setSelectedForm={setSelectedForm} />;
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
          <p className="authContent">Build this project by following <a href="https://dzone.com/articles/" target="_blank" rel="noopener noreferrer">Dgraph: The Perfect Database for Front-end Developers</a>.</p>
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
