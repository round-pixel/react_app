import React from 'react';
import DOM from 'react-dom-factories';

import styles from './constants/styles';
import BlogItem from './BlogItem';

const BlogList = ({ posts, addLike }) => (
  DOM.div(
    {
      className: 'blog-list',
      style: styles.blogListStyle
    },
    posts.map(
      (post) => (
        React.createElement(
          BlogItem,
          {
            key: post.id,
            id: post.id,
            image: post.image,
            message: post.message,
            metaInfo: post.metaInfo,
            likes: post.likes,
            addLike
          }
        )
      )
    )
  )
);

export default BlogList;
