import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'reactstrap';

import BlogList from './BlogList';
import PieChart from './PieChart';

const BlogPage = (posts) => (
  <Row>
    <Col lg="8">
      <BlogList {...posts} />
    </Col>
    <Col lg="4">
    </Col>
  </Row>
);

export default BlogPage;

BlogPage.propTypes = {
  posts: PropTypes.array
};
