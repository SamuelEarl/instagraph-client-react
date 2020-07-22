import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import * as fb from '@/init-firebase.js';
import { GET_USER } from '@/graphql/server/api';
import Button from '@/components/Button';
// Styles are in the "AuthLayout.global.scss" file


const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingMsg, setLoadingMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const client = useApolloClient();

  const [getUser, { loading, data, error }] = useMutation(GET_USER);

  const handleLogIn = async (e) => {
    try {
      e.preventDefault();

      setLoadingMsg("Loading...");

      const account = await fb.auth.signInWithEmailAndPassword(
        email.trim(),
        password.trim()
      );
      console.log("LOGIN ACCOUNT:", account.user);

      // Retrieve the user from Dgraph. `account.user.uid` is the user ID from Firebase Auth.
      const user = await getUser({
        variables: {
          // NOTE: You can comment one of these fields out to throw an error and test for errors.
          userId: account.user.uid,
          email: account.user.email // TODO: Remove this after `useLazyQuery` gets fixed. Ugh. See my comment in the `client-react/src/graphql/server/api.js` file.
        },
      });
      console.log("LOGGED IN USER:", user);

      // getUser({
      //   variables: {
      //     // NOTE: You can comment one of these fields out to throw an error and test for errors.
      //     userId: account.user.uid
      //   },
      //   onCompleted(user) {
      //     client.writeData({
      //       data: {
      //         user: user,
      //         // user: {
      //         //   userId: user.id,
      //         //   firstName: user.firstName,
      //         //   lastName: user.lastName,
      //         //   email: user.email,
      //         // },
      //         isAuthenticated: true
      //       }
      //     });
      //   }
      // });
      // console.log("APOLLO CLIENT:", client);

      // If the user successfully logs in, then store the user object from the response in ApolloClient's cache.
      if (user && user.data && user.data.updateUser && user.data.updateUser.user.length > 0) {
        const userObj = user.data.updateUser.user[0];
        client.writeData({
          data: {
            user: userObj,
            // user: {
            //   id: userObj.id,
            //   firstName: userObj.firstName,
            //   lastName: userObj.lastName,
            //   email: userObj.email,
            // },
            isAuthenticated: true
          }
        });
        console.log("APOLLO CACHE:", client.cache.data.data["$ROOT_QUERY.user"]);

        // Reset the input fields back to their original values.
        setEmail('');
        setPassword('');
        setLoadingMsg('');
        setErrorMsg('');

        // After successful log in, redirect user to the "Dashboard" page.
        navigate('/app/dashboard');
      }
    }
    catch(err) {
      setLoadingMsg('');
      console.error("LOG IN ERROR:", err);
      setErrorMsg(err.message);
    }
  }


  return (
    <form onSubmit={handleLogIn}>
      <h1 className="authHeader">Welcome Back</h1>

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      {/* If a loading message exists, then show it to the user otherwise show the "Log In" button */}
      {
        loadingMsg ?
        <div className="loadingMsg">{loadingMsg}</div> :
        <Button size="fullWidth">Log In</Button>
      }

      <div className="switchForm">
        <Link to="/register">Register For Account</Link>
        <Link to="/forgot-password">Forgot Password</Link>
      </div>

      {/* If an error message exists, then display it to the user. */}
      {errorMsg ? <div className="errorMsg">{errorMsg}</div> : null}
    </form>
  );
};

export default LogInForm;
