import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardText, CardBody, CardTitle, Row, Col } from 'reactstrap';

import Image from '../elements/Image';
import TextBox from '../elements/TextBox';
import Like from '../elements/Like';
import MetaInfoBlock from './MetaInfoBlock';
import styles from '../../constants/styles';

const BlogItem = ({ id, image, message, metaInfo, likes, addLike }) => (
  <Card style={ styles.CardStyle } >
    <Image props={ image } />
    <CardBody>
      <CardTitle>
        <TextBox message={ message } />
      </CardTitle>
      <CardText>
        <Row>
          <Col lg="9">
            <MetaInfoBlock props={ metaInfo } />
          </Col>
          <Col lg="3">
            <Like likes={ likes } id={ id } addLike={ addLike } />
          </Col>
        </Row>
      </CardText>
    </CardBody>
  </Card>
);

BlogItem.defaultProps = {
  id: null,
  image: null,
  message: '',
  metaInfo: '',
  likes: 0
};

BlogItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.object,
  message: PropTypes.string,
  metaInfo: PropTypes.object,
  likes: PropTypes.number,
  addLike: PropTypes.func
};

export default BlogItem;
