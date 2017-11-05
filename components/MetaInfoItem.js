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
