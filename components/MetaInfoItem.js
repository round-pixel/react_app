const MetaInfoItem = ({ item }) => (
  DOM.li(
    {
      style: {
        listStyleType: 'none',
        margin: '10px',
        color: '#757575'
      }
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
