import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../constants/styles';
import BlogItem from './BlogItem';

const BlogList = ({ posts, addLike }) => (
  <div className='blog-list' style={ styles.blogListStyle }>
    { posts.map((post) => 
      <BlogItem
        key={ post.id }
        id={ post.id }
        image={ post.image }
        metaInfo={ post.metaInfo }
        likes={ post.likes }
        addLike={ addLike }
      />
    )}
  </div>
);

BlogList.propTypes = {
  posts: PropTypes.array,
  addLike: PropTypes.func
};

export default BlogList;
