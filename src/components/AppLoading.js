import React from 'react';
import styles from "./AppLoading.module.scss";

const AppLoading = () => {

  return (
    <div className={styles.appLoading}>
      <div className={styles.text}>Loading...</div>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default AppLoading;
