import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'reactstrap';

import BlogList from './BlogList';
import PieChartContainer from 'containers/PieChartContainer';

const BlogPage = (posts) => (
  <Row>
    <Col lg="8">
      <BlogList {...posts} />
    </Col>
    <Col lg="4">
      <PieChartContainer />
    </Col>
  </Row>
);

export default BlogPage;

BlogPage.propTypes = {
  posts: PropTypes.array
};
