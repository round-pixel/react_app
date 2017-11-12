import MainLayout from 'components/layouts/MainLayout';

import { postPath } from 'components/helpers/routes';

import BlogPage from 'components/blog/ui/BlogPage';
import Post from 'components/blog/ui/Post';

const Index = {
  path: '/',
  component: BlogPage
};

const PostRoute = {
  path: postPath(),
  component: Post
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute
  ]
};
