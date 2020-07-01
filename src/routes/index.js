// Using multiple layouts with React Router:
// https://www.c-sharpcorner.com/article/multiple-layout-in-react-with-react-router-v4/
// Also search "react router multiple layouts"

import React from 'react';
import { Router, Redirect } from "@reach/router";

import AuthLayout from '@/layouts/AuthLayout';
import SignInForm from '@/pages/auth/SignInForm';
import RegisterForm from '@/pages/auth/RegisterForm';
import ForgotPasswordForm from '@/pages/auth/ForgotPasswordForm';
import ResetPasswordEmailSent from '@/pages/auth/ResetPasswordEmailSent';

import AppLayout from '@/layouts/AppLayout';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';

const IS_AUTHENTICATED = gql`
  query IsUserAuthenticated {
    isAuthenticated @client
  }
`;

// For this demo app, I will use the same non-secure token-based auth that Apollo uses in their tutorial.
// I need to set that up and then test these private route configs to see if they work.

// See how Gatsby handles private routes: https://www.gatsbyjs.org/docs/building-a-site-with-authentication/#setting-up-client-only-routes.
const { data } = useQuery(IS_AUTHENTICATED);
const isAuthenticated = data.isAuthenticated;

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
        isAuthenticated ?
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
