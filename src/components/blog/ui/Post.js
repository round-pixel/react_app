import React from 'react';
import PropTypes from 'prop-types';

import posts from '../../constants/static/posts';
import BlogItem from './BlogItem';

const Post = ({ params }) => {
  const post = posts[params.id - 1];
  return (
    <BlogItem
      key={ post.id }
      id={ post.id }
      message={ post.message }
      image={ post.image }
      metaInfo={ post.metaInfo }
      likes={ post.likes }
    />
  );
};

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
