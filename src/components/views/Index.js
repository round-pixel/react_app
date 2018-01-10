import React from 'react';

import Helmet from 'react-helmet';
import BlogList from 'components/blog/containers/BlogList';

const Index = ({ items }) => (
  <div>
    <BlogList {...items} />
    <Helmet
      title='Список постов'
    />
  </div>
);

Index.propTypes = {
  items: BlogList.propTypes.posts
};

export default Index;
