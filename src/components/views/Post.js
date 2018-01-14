import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import BlogItem from 'components/Blog/BlogItem';

const Post = ({ post }) => (
  <div>
    { post &&
      <BlogItem
        key={ post.id }
        id={ post.id }
        message={ post.message }
        image={ post.image }
        metaInfo={ post.metaInfo }
        likes={ post.likes }
      />
    }
    { post &&  <Helmet title={post.message}/> }
  </div>
);

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
