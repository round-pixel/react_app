import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardText, CardBody,
  CardTitle, Row, Col, CardFooter } from 'reactstrap';

import Image from '../elements/Image';
import TextBox from '../elements/TextBox';
import Like from '../elements/Like';
import MetaInfoBlock from './MetaInfoBlock';
import Link from 'components/blog/elements/Link';

import styles from '../../constants/styles';

import { postPath } from 'components/helpers/routes';

const BlogItem = ({ id, image, message, metaInfo, likes, addLike }) => (
  <Card style={ styles.CardStyle } >
    <Image props={ image } />
    <CardBody>
      <CardTitle>
        <Row>
          <Col lg="9">
            <TextBox message={ message } />
          </Col>
          <Col lg="3">
            <Link to={ postPath(id) } style={ styles.linkStyle }>
              Read more...
            </Link>
          </Col>
        </Row>
      </CardTitle>
      <CardText>

      </CardText>
    </CardBody>
    <CardFooter>
      <Row>
        <Col lg="9">
          <MetaInfoBlock props={ metaInfo } />
        </Col>
        <Col lg="3">
          <Like likes={ likes } id={ id } addLike={ addLike } />
        </Col>
      </Row>
    </CardFooter>
  </Card>
);

BlogItem.defaultProps = {
  id: null,
  image: {},
  message: '',
  metaInfo: {},
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
