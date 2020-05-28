import React from 'react';
import cx from 'classnames';
import styles from "./Button.module.scss";

const Button = ({ children, disabled, size }) => {
  return (
  <button
    className={cx(styles.button, styles[size])}
    disabled={disabled}
  >
    {children}
  </button>
  );
};

export default Button;
