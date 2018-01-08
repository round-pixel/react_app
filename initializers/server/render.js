import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter, matchPath } from 'react-router-dom';
import createStore from 'store';
import prepareData from 'helpers/prepareData';
import { BlogRoutes, createRoutes } from 'routes';
import { assign } from 'lodash';
import { parse } from 'qs';
import { compact } from 'lodash/array';

const routes = createRoutes();

const store = createStore();

export default (req, res) => {
  const state = {
    params: {},
    routes: [],
    query: {}
  };

  routes.some(route => {
    const match = matchPath(req.url, route);

    if (match) {
      state.routes.push(route);
      assign(state.params, match.params);
      assign(state.query, parse(req.url.substr(1)));
      prepareData(store, state);
    }

    return match;
  });

  Promise.all(compact(prepareData(store, state))).then(() => {
    const initialState = JSON.stringify(store.getState());

    const content = ReactDOMServer.renderToString(
      <Provider store={store} >
        <StaticRouter location={req.url} context={state}>
          <BlogRoutes />
        </StaticRouter>
      </Provider>
    );

    res.status(200);
    res.render(
      'index',
      { initialState, content }
    );
  });
};
