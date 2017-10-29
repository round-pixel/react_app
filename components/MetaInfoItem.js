const MetaInfoItem = ({ item }) => (
  DOM.li(
    {
      style: {
        display: 'inline',
        margin: '10px',
        color: '#757575'
      }
    },
    (
      item.constructor === Date
      ? moment(item).format('MMMM Do YYYY, h:mm:ss')
      : item
    )
  )
);

MetaInfoItem.defaultProps = {
  item: null
};

MetaInfoItem.propTypes = {
  item: PropTypes.oneOfType([ PropTypes.string, PropTypes.date ])
};
