import React from 'react';
import ReactDOM from 'react-dom';

import { Router, match } from 'react-router-dom';

import history from 'helpers/history';

import { Provider } from 'react-redux';

import store from 'store';

import MainLayout from 'components/layouts/MainLayout';
import prepareData from 'helpers/prepareData';
import DevTools from 'containers/DevTools';

// history.listenBefore(function(location) {
//   match({ location }, (error, redirect, state) => {
//     if (!error && !redirect) {
//       prepareData(store, state);
//     }
//   });
// });

const App = () => (
  <Provider store={store} >
    <Router history={history}>
      <MainLayout />
    </Router>
  </Provider>
);

ReactDOM.render(
  <DevTools store={ store } />,
  document.getElementById('devtools')
);

export default App;
