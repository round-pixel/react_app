import React from 'react';

import { Router } from 'react-router-dom';

import history from 'helpers/history';

import { Provider } from 'react-redux';

import store from 'store';

import MainLayout from 'components/layouts/MainLayout';

const App = () => (
  <Provider store={store} >
    <Router history={history}>
      <MainLayout />
    </Router>
  </Provider>
);

export default App;
