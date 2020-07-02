import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SIGN_OUT } from '@/graphql/server/api';
import { Link, navigate } from '@reach/router';
import styles from "./Navigation.module.scss";

const Navigation = (props) => {

  const [signOut, { data, loading, error }] = useMutation(SIGN_OUT);

  const handleSignOut = async (e) => {
    // TODO: Get the userId from the GraphQL cache and set the user's sessionId to null and clear the user data from the ApolloClient cache.
    // Then remove all references to Apollo Client.
    const id = "0x9c43"; // user id

    try {
      await signOut({
        variables: {
          id: id, // I need to get the Author ID from the ApolloClient cache.
        }
      });

      // If successful sign out, clear localStorage.
      localStorage.clear();

      console.log("User signed out");

      // After successful sign out, redirect user to the Sign In page.
      navigate('/sign-in');
    }
    catch(err) {
      console.error("SIGN OUT ERROR:", err.message);
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

export default Navigation;
