import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import * as ROUTES from 'constants/routes';
import Router from './router';

export const Routes = () => (
  <Switch>
    <Router />
    <Redirect from="*" to={ROUTES.NOT_FOUND} />
  </Switch>
);
