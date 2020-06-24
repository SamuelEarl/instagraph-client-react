import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { LOG_OUT } from '@/graphql/api';
import { NavLink, withRouter } from 'react-router-dom';
import styles from "./Navigation.module.scss";

const Navigation = (props) => {

  const [logoutMutation, logoutStatus] = useMutation(LOG_OUT);

  const handleLogout = async (e) => {
    const id = "0x7537";
    try {
      await logoutMutation({
        variables: {
          id: id, // I need to get the Author ID from Apollo Client.
        }
      });

      console.log("User logged out");

      // React Router's `history` object is available through the `withRouter` HOC.
      // After successful logout, redirect user to the login page.
      props.history.push('/login');
    }
    catch(err) {
      console.error("LOG OUT ERROR:", err.message);
    }
  }

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
              <NavLink to="/profile" exact activeClassName={styles.active}>
                Profile
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/login" exact activeClassName={styles.active}>
                Login
              </NavLink>
            </li> */}
            <li>
              <button className={styles.navButton} onClick={() => handleLogout()}>
                Logout
              </button>
              {/* <NavLink to="/logout" exact activeClassName={styles.active}>
                Logout
              </NavLink> */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default withRouter(Navigation);
