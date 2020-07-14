import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import * as fb from '@/init-firebase.js';
import { LOG_IN } from '@/graphql/server/api';
import { v4 as uuidv4 } from 'uuid';
import Button from '@/components/Button';
// Styles are in the "AuthLayout.global.scss" file

const LogInForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingMsg, setLoadingMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  // const [logIn, { loading, error }] = useMutation(LOG_IN);
  const client = useApolloClient();

  const handleLogIn = async (e) => {
    try {
      e.preventDefault();

      setLoadingMsg("Loading...");


      const account = await fb.auth.signInWithEmailAndPassword(
        email.trim(),
        password.trim()
      );

      const { data } = useQuery(GET_USER, {
        variables: {
          id: account.user.uid
        }
      });

      // const user = await logIn({
      //   variables: {
      //     email: email.trim(),
      //     password: password.trim(),
      //     // TODO: The sessionId should be generated on the server. However, the @custom directive is not supported in the current version of Dgraph. When @custom is supported, then I will remove this sessionId in the client and implement it on the server where it should go. @custom should be supported in v20.07 - https://github.com/dgraph-io/dgraph/issues/5610.
      //     sessionId: uuidv4(),
      //   },
      // });

      // If the user successfully logs in, then store the user object from the response in ApolloClient's cache.
      console.log("LOGGED IN USER:", data);
      if (user && user.data && user.data.updateUser && user.data.updateUser.user.length > 0) {
        const userObj = user.data.updateUser.user[0];
        localStorage.setItem("sessionId", userObj.sessionId);
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
        console.log("APOLLO CLIENT:", client);

        // Reset the input fields back to their original values.
        setEmail('');
        setPassword('');
        setLoadingMsg('');
        setErrorMsg('');

        // After successful log in, redirect user to the "Dashboard" page.
        navigate('/app/dashboard');
      }
      else if(error) {
        throw Error(error)
      }
      else {
        throw Error("No user exists with those credentials");
      }
    }
    catch(err) {
      setLoadingMsg('');
      if (err.message === "GraphQL error: must be defined") {
        setErrorMsg("All fields are required");
      }
      else {
        setErrorMsg(err.message);
      }
      console.error("LOG IN ERROR:", err);
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
