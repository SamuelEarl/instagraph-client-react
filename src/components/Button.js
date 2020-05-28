import React from 'react';
import cx from 'classnames';
import styles from "./Button.module.scss";

const Button = ({ children, size }) => {
  return (
  <button className={ cx(styles.button, styles[size]) }>{children}</button>
  );
};

export default Button;
