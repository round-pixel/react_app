import React from 'react';

import Helmet from 'react-helmet';
import BlogPage from 'components/blog/containers/BlogPage';

const Index = (items) => (
  <div>
    <BlogPage {...items} />
    <Helmet title='Список постов' />
  </div>
);

Index.propTypes = {
  items: BlogPage.propTypes.posts
};

export default Index;
