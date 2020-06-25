import React, { Suspense } from 'react';
import { Routes } from 'routes';

import LoadingSpinner from 'components/loading-spinner/loading-spinner';

const App = () => (
  <Suspense fallback={<LoadingSpinner center />}>
    <Routes />
  </Suspense>

);

export default App;
