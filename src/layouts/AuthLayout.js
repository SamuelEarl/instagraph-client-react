import React, { useState } from 'react';
import "./AuthLayout.global.scss";
import styles from "./AuthLayout.module.scss";

const AuthLayout = (props) => {
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
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
