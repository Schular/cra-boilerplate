import React from 'react';
import { Route } from 'react-router-dom';

import { routes } from 'routes/paths';

const Router = () => routes.map((route) => (
  <Route key={route.path} exact={route.exact} path={route.path}>
    {route.layout
      ? (
        <route.layout>
          <route.view />
        </route.layout>
      )
      : <route.view />}
  </Route>
));

export default Router;
