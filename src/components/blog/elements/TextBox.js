import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ message }) => (
  <span>
    { message }
  </span>
);

TextBox.defaultProps = {
  message: ''
};

TextBox.propTypes = {
  message: PropTypes.string
};

export default TextBox;
