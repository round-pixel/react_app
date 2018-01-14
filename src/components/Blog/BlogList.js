import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from './BlogItem';

const BlogList = ({ posts }) => (
  <div>
    { posts &&
      posts.map((post) =>
        <BlogItem
          key={ post.id }
          id={ post.id }
          message={ post.message }
          image={ post.image }
          metaInfo={ post.metaInfo }
          likes={ post.likes }
        />
      )
    }
  </div>
);

BlogList.propTypes = {
  posts: PropTypes.array,
};

export default BlogList;
