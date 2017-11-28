import React from 'react';

import { Router } from 'react-router-dom';

import history from 'helpers/history';

import MainLayout from 'components/layouts/MainLayout';

const App = () => (
  <Router history={history}>
    <MainLayout />
  </Router>
);

export default App;
