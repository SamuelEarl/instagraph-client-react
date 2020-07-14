import React from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { auth } from '@/init-firebase.js';
// TODO: Delete all unused code.
import { LOG_OUT } from '@/graphql/server/api';
import { Link, navigate } from '@reach/router';
import styles from "./Navigation.module.scss";

const Navigation = (props) => {
  // const [logOut, { data, loading, error }] = useMutation(LOG_OUT);
  const client = useApolloClient();

  const handleLogOut = async (e) => {
    try {
      auth.signOut();

      client.writeData({
        data: {
          user: null, // TODO: Find out if this is how I should clear the user from the cache.
          isAuthenticated: false
        }
      });

      // await logOut({
      //   variables: {
      //     id: id, // I need to get the User ID from the ApolloClient cache.
      //   },
      //   update(cache) {
      //     // Upon log out, set the cache's `isAuthenticated` field to `false`.
      //     cache.writeData({
      //       data: {
      //         user: null, // TODO: Find out if this is how I should clear the user from the cache.
      //         isAuthenticated: false
      //       }
      //     });
      //   }
      // });

      // // Upon log out, clear localStorage.
      // localStorage.clear();

      console.log("User logged out");

      // After successful log out, redirect user to the Log In page.
      navigate('/login');
    }
    catch(err) {
      console.error("LOG OUT ERROR:", err.message);
    }
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navLeft}>
          <Link to="/app/dashboard">
            <h3>Instagraph</h3>
          </Link>
        </nav>
        <nav className={styles.navRight}>
          <ul>
            <li>
              <Link to="/app/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/app/profile">
                Profile
              </Link>
            </li>
            <li>
              <button className={styles.navButton} onClick={() => handleLogOut()}>
                Log Out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
