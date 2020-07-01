// Using multiple layouts with React Router:
// https://www.c-sharpcorner.com/article/multiple-layout-in-react-with-react-router-v4/
// Also search "react router multiple layouts"

import React from 'react';
import { Router, Redirect } from "@reach/router";
import { useQuery } from '@apollo/react-hooks';

import { IS_AUTHENTICATED } from '@/graphql/client/api';

import AuthLayout from '@/layouts/AuthLayout';
import SignInForm from '@/pages/auth/SignInForm';
import RegisterForm from '@/pages/auth/RegisterForm';
import ForgotPasswordForm from '@/pages/auth/ForgotPasswordForm';
import ResetPasswordEmailSent from '@/pages/auth/ResetPasswordEmailSent';

import AppLayout from '@/layouts/AppLayout';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';

// TODO: For this demo app, I will use the same non-secure token-based auth that Apollo uses in their tutorial.
// I need to set that up and then test these private route configs to see if they work.

// This is a combination of how Apollo and Gatsby handle private routes:
// * Apollo: https://www.apollographql.com/docs/tutorial/local-state/#query-local-data
// * Gatsby: https://www.gatsbyjs.org/docs/building-a-site-with-authentication/#setting-up-client-only-routes.
const IsAuthenticated = () => {
  const { data } = useQuery(IS_AUTHENTICATED);
  return data.isAuthenticated;
}

const Routes = () => {
  return (
    <Router>
      <Redirect from="/" to="sign-in" noThrow />
      <AuthLayout path="/">
        <SignInForm path="sign-in" />
        <RegisterForm path="register" />
        <ForgotPasswordForm path="forgot-password" />
        <ResetPasswordEmailSent path="reset-password-email-sent" />
      </AuthLayout>
      {
        IsAuthenticated ?
        <AppLayout path="app">
          <Dashboard path="dashboard" />
          <Profile path="profile" />
        </AppLayout> :
        <SignInForm path="sign-in" />
      }
    </Router>
  );
};

export default Routes;
