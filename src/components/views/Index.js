import React from 'react';

import Helmet from 'react-helmet';
import Blog from 'components/Blog';

const Index = (items) => (
  <div>
    <Blog {...items} />
    <Helmet title='Список постов' />
  </div>
);

Index.propTypes = {
  items: Blog.propTypes.posts
};

export default Index;
