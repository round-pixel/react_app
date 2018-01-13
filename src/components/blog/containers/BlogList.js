import React from 'react';
import PropTypes from 'prop-types';

import styles from 'constants/styles';
import BlogItem from './BlogItem';

const BlogList = ({ posts }) => (
  <div style={ styles.blogListStyle }>
    { posts && posts.map((post) =>
      <BlogItem
        key={ post.id }
        id={ post.id }
        message={ post.message }
        image={ post.image }
        metaInfo={ post.metaInfo }
        likes={ post.likes }
      />
    )}
  </div>
);

BlogList.propTypes = {
  posts: PropTypes.array,
  addLike: PropTypes.func
};

export default BlogList;
