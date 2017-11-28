import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ props }) => (
  <img
    src={ props.src }
    width={ props.width ? props.width : '100%'}
    height={ props.height ? props.height : '140px' }
    alt={ props.alt }
  />
);

Image.propTypes = {
  props: PropTypes.object,
  src: PropTypes.string,
  width: PropTypes.string,
  height:  PropTypes.string,
  alt: PropTypes.string
};

export default Image;
