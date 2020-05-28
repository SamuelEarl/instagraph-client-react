import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navLeft}>
          <NavLink to="/dashboard" exact activeClassName={styles.active}>
            <h3>Instagraph</h3>
          </NavLink>
        </nav>
        <nav className={styles.navRight}>
          <ul>
            <li>
              <NavLink to="/dashboard" exact activeClassName={styles.active}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" exact activeClassName={styles.active}>
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" exact activeClassName={styles.active}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout" exact activeClassName={styles.active}>
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
