import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from '@/layouts/Layout';
import Auth from '@/pages/auth/Auth';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/login' />
        </Route>
        <Route exact path='/login' component={Auth} />
        <Layout>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/profile' component={Profile} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
