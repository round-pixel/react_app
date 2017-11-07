import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import styles from '../../constants/styles';

const TextBox = ({ message }) => (
  DOM.span(
    {
      style: styles.textBoxStyle
    },
    message
  )
);

TextBox.defaultProps = {
  message: ''
};

TextBox.propTypes = {
  message: PropTypes.string
};

export default TextBox;
