import React from 'react';
import ReactDOM from 'react-dom';
import { assign } from 'lodash';
import { parse } from 'qs';
import { Router, matchPath } from 'react-router-dom';

import history from 'helpers/history';

import { Provider } from 'react-redux';

import store from 'store';

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
  document.getElementById('devtools')
);

export default App;
