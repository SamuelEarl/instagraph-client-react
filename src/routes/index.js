// Using multiple layouts with React Router:
// https://www.c-sharpcorner.com/article/multiple-layout-in-react-with-react-router-v4/
// Also search "react router multiple layouts"

import React from 'react';
import { Router, Redirect } from "@reach/router";
import { useQuery } from '@apollo/react-hooks';

import { GET_USER_BY_SESSION_ID } from '@/graphql/server/api';
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
  // If a user refreshes the browser, then get the currently logged in user. When this component first loads, query for the user.
  // TODO: Update my server-side schema to include a query to get user by session ID. I probably need to add an @id directive to the sessionId field, if possible. If that is not possible, then I need to save the user's email address in localStorage and get the user by email or I could just get the user by ID.
  // const { data } = useQuery(GET_USER_BY_SESSION_ID, {
  //   variables: {
  //     id: localStorage.getItem("sessionId")
  //   }
  // });


  // This is a combination of how Apollo and Gatsby handle private routes:
  // * Apollo: https://www.apollographql.com/docs/tutorial/local-state/#query-local-data
  // * Gatsby: https://www.gatsbyjs.org/docs/building-a-site-with-authentication/#setting-up-client-only-routes.
  const IsAuthenticated = () => {
    const { data } = useQuery(IS_AUTHENTICATED);
    return data.isAuthenticated;
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
