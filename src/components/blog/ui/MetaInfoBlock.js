import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../constants/styles';
import dateToString from '../../constants/date';
import MetaInfoItem from '../elements/MetaInfoItem';

const MetaInfoBlock = ({ props }) => (
  <ul style={ styles.metaInfoBlockStyle }>
    { props.createdAt && <MetaInfoItem item={ `Созданно: ${dateToString(props.createdAt)}` } /> }
    { props.createdBy && <MetaInfoItem item={ `Автор: ${props.createdBy}`} /> }
    { props.updatedAt && <MetaInfoItem item={ `Созданно: ${dateToString(props.updatedAt)}` } /> }
  </ul>
);

MetaInfoBlock.defaultProps = {
  createdAt: null,
  createdBy: '',
  updatedAt: null
};

MetaInfoBlock.propTypes = {
  props: PropTypes.object,
  createdAt: PropTypes.oneOfType([ PropTypes.string, PropTypes.instanceOf(Date) ]),
  createdBy: PropTypes.string,
  updatedAt: PropTypes.oneOfType([ PropTypes.string, PropTypes.instanceOf(Date) ])
};

export default MetaInfoBlock;
