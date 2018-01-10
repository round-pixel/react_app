import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import BlogItem from 'components/blog/containers/BlogItem';

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
    { post && <Helmet title={post.message}/>}
  </Row>
);

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
