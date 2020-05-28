import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from '@/layouts/Layout';
import Auth from '@/pages/auth/Auth';
import Dashboard from '@/pages/Dashboard';
import Settings from '@/pages/Settings';

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
          <Route exact path='/settings' component={Settings} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
