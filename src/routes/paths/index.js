import { lazy } from 'react';

import * as ROUTES from 'constants/routes';
import MainLayout from 'layouts/main-layout';

const Home = lazy(() => import('pages/home/home'));

export const routes = [
  {
    path: ROUTES.HOME,
    exact: true,
    view: Home,
    exclude: false,
    layout: MainLayout
  }
];
