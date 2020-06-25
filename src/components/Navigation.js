import React from 'react';
import { useQuery, useMutation } from 'urql';
import { SIGN_OUT } from '@/graphql/api';
import { NavLink, withRouter } from 'react-router-dom';
import styles from "./Navigation.module.scss";

const Navigation = (props) => {

  const [signOutResult, signOut] = useMutation(SIGN_OUT);

  const handleSignOut = async (e) => {
    // TODO: Get the userId from the GraphQL cache and set the user's sessionId to null and clear the user data from the urql cache.
    // Then remove all references to Apollo Client.
    const id = "0x7537"; // user id

    try {
      await signOut({
        variables: {
          id: id, // I need to get the Author ID from the urql cache.
        }
      });

      console.log("User signed out");

      // React Router's `history` object is available through the `withRouter` HOC.
      // After successful sign out, redirect user to the Sign In page.
      props.history.push('/sign-in');
    }
    catch(err) {
      console.error("SIGN OUT ERROR:", err.message);
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
            <li>
              <button className={styles.navButton} onClick={() => handleSignOut()}>
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default withRouter(Navigation);
