// Using multiple layouts with React Router:
// https://www.c-sharpcorner.com/article/multiple-layout-in-react-with-react-router-v4/
// Also search "react router multiple layouts"

import React from 'react';
import { Router, Redirect } from "@reach/router";
import { useApolloClient, useQuery, useMutation } from '@apollo/react-hooks';
import { auth } from '@/init-firebase.js';

import { GET_USER } from '@/graphql/server/api';
import { IS_AUTHENTICATED } from '@/graphql/client/api';

import AuthLayout from '@/layouts/AuthLayout';
import LogInForm from '@/pages/auth/LogInForm';
import RegisterForm from '@/pages/auth/RegisterForm';
import ForgotPasswordForm from '@/pages/auth/ForgotPasswordForm';
import ResetPasswordEmailSent from '@/pages/auth/ResetPasswordEmailSent';

import AppLayout from '@/layouts/AppLayout';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';

// TODO: For this demo app, I will use a similar non-secure, token-based auth flow that Apollo uses in their tutorial. I need to set that up and then test these private route configs to see if they work.

const Routes = () => {
  const [getUser, { loading, data, error }] = useMutation(GET_USER);
  const client = useApolloClient();

  const currentUser = auth.currentUser;

  // This is a combination of how Apollo and Gatsby handle private routes:
  // * Apollo: https://www.apollographql.com/docs/tutorial/local-state/#query-local-data
  // * Gatsby: https://www.gatsbyjs.org/docs/building-a-site-with-authentication/#setting-up-client-only-routes.
  const IsAuthenticated = () => {
    const { data } = useQuery(IS_AUTHENTICATED);
    return data.isAuthenticated;
  }

  if (currentUser && !IsAuthenticated()) {
    console.log("CURRENT USER (FROM ROUTER):", currentUser, IsAuthenticated());
    // getUser({
    //   variables: {
    //     // NOTE: You can comment one of these fields out to throw an error and test for errors.
    //     userId: currentUser.uid,
    //     email: currentUser.email
    //   },
    //   onCompleted(userProfile) {
    //     client.writeData({
    //       data: {
    //         user: userProfile,
    //         isAuthenticated: true
    //       }
    //     });
    //   }
    // });
    // console.log("APOLLO CLIENT:", client);
  }

  return (
    <Router>
      <Redirect from="/" to="login" noThrow />
      <AuthLayout path="/">
        <LogInForm path="login" />
        <RegisterForm path="register" />
        <ForgotPasswordForm path="forgot-password" />
        <ResetPasswordEmailSent path="reset-password-email-sent" />
      </AuthLayout>
      <AppLayout path="app">
        {
          IsAuthenticated() ?
          <Dashboard path="dashboard" /> :
          <Redirect from="dashboard" to="/login" noThrow />
        }
        {
          IsAuthenticated() ?
          <Profile path="profile" /> :
          <Redirect from="profile" to="/login" noThrow />
        }
      </AppLayout>
    </Router>
  );
};

export default Routes;
