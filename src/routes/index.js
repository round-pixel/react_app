import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from 'components/Layouts/AboutPage';
import EditPost from 'containers/EditPostContainer';
import Contact from 'components/Layouts/Contact';
import MainLayout from 'components/Layouts/MainLayout';
import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';
import { rootPath, postsPath, aboutPath, contactPath, editPostPath } from 'helpers/routes';
// import initialLoad from 'helpers/initialLoad';

const routes = [
  {
    path: rootPath(),
    exact: true,
    prepareData: (store) => {
      // if (initialLoad()) return;
      return store.dispatch(fetchPosts());
    },
    component: PostsContainer
  },
  {
    path: postsPath(),
    exact: true,
    prepareData: (store, query, params) => {
      // if (initialLoad()) return;
      return store.dispatch(fetchPost(params.id));
    },
    component: PostContainer
  },
  {
    path: editPostPath(),
    prepareData: (store, query, params) => {
      // if (initialLoad()) return;
      return store.dispatch(fetchPost(params.id));
    },
    component: EditPost
  },
  {
    path: aboutPath(),
    component: About
  },
  {
    path: contactPath(),
    component: Contact
  },
];

export const BlogRoutes = () => (
  <MainLayout>
    <Switch>
      { routes.map((route, i) => <Route key={i} {...route} />) }
    </Switch>
  </MainLayout>
);

export function createRoutes() {
  return routes;
}

export default BlogRoutes;
