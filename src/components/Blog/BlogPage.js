import React from 'react';
import PropTypes from 'prop-types';
import BlogList from './BlogList';

const BlogPage = (posts) => (
  <BlogList {...posts} />
);

export default BlogPage;

BlogPage.propTypes = {
  posts: PropTypes.array
};
