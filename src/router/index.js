// Using multiple layouts with React Router:
// https://www.c-sharpcorner.com/article/multiple-layout-in-react-with-react-router-v4/
// Also search "react router multiple layouts"

import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AuthLayoutRoute from './AuthLayoutRoute';
import SignInForm from '@/pages/auth/SignInForm';
import RegisterForm from '@/pages/auth/RegisterForm';
import ForgotPasswordForm from '@/pages/auth/ForgotPasswordForm';
import ResetPasswordEmailSent from '@/pages/auth/ResetPasswordEmailSent';

import AppLayoutRoute from './AppLayoutRoute';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/sign-in' />
        </Route>

        <AuthLayoutRoute exact path='/sign-in' component={SignInForm} />
        <AuthLayoutRoute exact path='/register' component={RegisterForm} />
        <AuthLayoutRoute exact path='/forgot-password' component={ForgotPasswordForm} />
        <AuthLayoutRoute exact path='/reset-password-email-sent' component={ResetPasswordEmailSent} />

        <AppLayoutRoute exact path='/dashboard' component={Dashboard} />
        <AppLayoutRoute exact path='/profile' component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
