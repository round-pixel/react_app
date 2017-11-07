import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import styles from '../../constants/styles';
import Image from '../elements/Image';
import TextBox from '../elements/TextBox';
import Like from '../elements/Like';
import MetaInfoBlock from './MetaInfoBlock';

const BlogItem = ({ id, image, message, metaInfo, likes, addLike }) => (
  DOM.div(
    {
      className: 'blog-item',
      style: styles.blogItemStyle
    },
    React.createElement(Image, image),
    React.createElement(TextBox, { message }),
    React.createElement(Like, { likes, addLike, id }),
    React.createElement(MetaInfoBlock, metaInfo)
  )
);

BlogItem.defaultProps = {
  image: null,
  message: '',
  metaInfo: '',
  likes: 0
};

BlogItem.propTypes = {
  image: PropTypes.object,
  message: PropTypes.string,
  metaInfo: PropTypes.object,
  likes: PropTypes.number
};

export default BlogItem;
