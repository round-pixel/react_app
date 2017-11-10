import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../constants/styles';
import Image from '../elements/Image';
import TextBox from '../elements/TextBox';
import Like from '../elements/Like';
import MetaInfoBlock from './MetaInfoBlock';

const BlogItem = ({ id, image, message, metaInfo, likes, addLike }) => (
  <div className='blog-item' style={ styles.blogItemStyle }>
    <Image
      src={ image.src }
      width={ image.width }
      height={ image.height }
      alt={ image.alt }
    />
    <TextBox message={ message } />
    <Like props={ likes, addLike, id } />
    <MetaInfoBlock
      createdAt={ metaInfo.createdAt }
      createdBy={ metaInfo.createdBy }
      updatedAt={ metaInfo.updatedAt }
    />
  </div>
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
