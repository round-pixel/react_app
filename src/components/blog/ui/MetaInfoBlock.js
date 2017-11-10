import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../constants/styles';
import dateToString from '../../constants/date';
import MetaInfoItem from '../elements/MetaInfoItem';

const MetaInfoBlock = ({ createdAt, createdBy, updatedAt }) => (
  <ul style={ styles.metaInfoBlockStyle }>
    <MetaInfoItem item={ createdAt && `Созданно: ${dateToString(createdAt)}` } />
    <MetaInfoItem item={ createdBy && `Автор: ${createdBy}`} />
    <MetaInfoItem item={ updatedAt && `Созданно: ${dateToString(updatedAt)}` } />
  </ul>
);

MetaInfoBlock.defaultProps = {
  createdAt: null,
  createdBy: '',
  updatedAt: null
};

MetaInfoBlock.propTypes = {
  createdAt: PropTypes.oneOfType([ PropTypes.string, PropTypes.date ]),
  createdBy: PropTypes.string,
  updatedAt: PropTypes.oneOfType([ PropTypes.string, PropTypes.date ])
};

export default MetaInfoBlock;
