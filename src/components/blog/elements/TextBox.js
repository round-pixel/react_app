import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../constants/styles';

const TextBox = ({ message }) => (
  <span style={ styles.textBoxStyle } >{ message }</span>
);

TextBox.defaultProps = {
  message: ''
};

TextBox.propTypes = {
  message: PropTypes.string
};

export default TextBox;
