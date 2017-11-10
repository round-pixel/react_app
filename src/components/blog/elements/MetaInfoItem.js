import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../constants/styles';

const MetaInfoItem = ({ item }) => (
  <li style={ styles.metaInfoItemStyle }>{ item }</li>
);

MetaInfoItem.defaultProps = {
  item: ''
};

MetaInfoItem.propTypes = {
  item: PropTypes.oneOfType([ PropTypes.string, PropTypes.instanceOf(Date) ])
};

export default MetaInfoItem;
