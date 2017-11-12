import MainLayout from 'components/layouts/MainLayout';

import { postPath } from 'components/helpers/routes';

import BlogPage from 'components/blog/ui/BlogPage';
import Post from 'components/blog/ui/Post';
import About from 'components/blog/view/AboutPage';
import Contact from 'components/blog/view/ContactPage';

const Index = {
  path: '/',
  component: BlogPage
};

const PostRoute = {
  path: postPath(),
  component: Post
};

const AboutPage = {
  path: '/about',
  component: About
};

const ContactPage = {
  path: '/contact',
  component: Contact
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    AboutPage,
    ContactPage
  ]
};
