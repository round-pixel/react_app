import React from 'react';
import ReactDOM from 'react-dom';
import { assign } from 'lodash';
import { parse } from 'qs';
import { Router, matchPath } from 'react-router-dom';

import history from 'helpers/history';

import { Provider } from 'react-redux';

import createStore from 'store';

// eslint-disable-next-line
const store = createStore(window.__INITIAL_STATE__);

import { BlogRoutes, createRoutes} from 'routes';
import prepareData from 'helpers/prepareData';
import DevTools from 'containers/DevTools';

const routes = createRoutes();
function historyCb(location) {
  const state = { params: {}, routes: [] };
  routes.some(route => {
    const match = matchPath(location.pathname, route);

    if (match) {
      state.routes.push(route);
      assign(state.params, match.params);
      assign(state.query, parse(location.search.substr(1)));
      prepareData(store, state);
    }
    return match;
  });
}

history.listen(historyCb);

historyCb(window.location);

const App = () => (
  <Provider store={store} >
    <Router history={history}>
      <BlogRoutes />
    </Router>
  </Provider>
);

ReactDOM.render(
  <DevTools store={ store } />,
  document.getElementById('devtools'),
  // eslint-disable-next-line
  () => { delete window.__INITIAL_STATE__ }
);

export default App;
