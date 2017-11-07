import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import styles from '../../constants/styles';

const MetaInfoItem = ({ item }) => (
  DOM.li(
    {
      style: styles.metaInfoItemStyle
    },
    item
  )
);

MetaInfoItem.defaultProps = {
  item: null
};

MetaInfoItem.propTypes = {
  item: PropTypes.oneOfType([ PropTypes.string, PropTypes.date ])
};

export default MetaInfoItem;
