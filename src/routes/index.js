import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from 'components/layouts/AboutPage';
import MainLayout from 'components/layouts/MainLayout';
import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import Contact from 'components/layouts/ContactPage';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';
import { map } from 'lodash';
import { rootPath, postsPath, aboutPath, contactPath, } from 'helpers/routes';
import initialLoad from 'helpers/initialLoad';

const routes = [
  {
    path: rootPath(),
    exact: true,
    prepareData: (store) => {
      if (initialLoad()) return;
      return store.dispatch(fetchPosts());
    },
    component: PostsContainer
  },
  {
    path: postsPath(),
    prepareData: (store, query, params) => {
      if (initialLoad()) return;
      return store.dispatch(fetchPost(params.id));
    },
    component: PostContainer
  },
  {
    path: aboutPath(),
    component: About
  },
  {
    path: contactPath(),
    component: Contact
  }
];

export const BlogRoutes = () => (
  <MainLayout>
    <Switch>
      { map(routes, (route, index) => <Route key={index} {...route} />) }
    </Switch>
  </MainLayout>
);

export function createRoutes() {
  return routes;
}

export default BlogRoutes;
