import React from 'react';
import PropTypes from 'prop-types';

import styles from './constants/styles';
import dateToString from './constants/date';
import MetaInfoItem from './MetaInfoItem';

const MetaInfoBlock = ({ createdAt, createdBy, updatedAt }) => (
  React.createElement(
    'ul',
    {
      style: styles.metaInfoBlockStyle
    },
    createdAt && React.createElement(MetaInfoItem, {item: `Созданно: ${ dateToString(createdAt)}`}),
    createdBy && React.createElement(MetaInfoItem, { item: `Автор: ${createdBy }`}),
    updatedAt && React.createElement(MetaInfoItem, { item: `Обновленно: ${dateToString(updatedAt) }`})
  )
);

MetaInfoBlock.defaultProps = {
  createdAt: null,
  createdBy: '',
  updatedAt: null
};

MetaInfoBlock.propTypes = {
  createdAt: PropTypes.oneOfType([ PropTypes.func, PropTypes.date ]),
  createdBy: PropTypes.string,
  updatedAt: PropTypes.oneOfType([ PropTypes.func, PropTypes.date ])
};

export default MetaInfoBlock;
