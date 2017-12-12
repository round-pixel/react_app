import React from 'react';
import PropTypes from 'prop-types';

import BlogItem from './BlogItem';

import { Row, Col } from 'reactstrap';

const Post = ({ post }) => (
  <Row>
    <Col lg="8">
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
    </Col>
    <Col lg="4">
    </Col>
  </Row>
);

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
