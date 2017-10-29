const MetaInfoBlock = ({ createdAt, createdBy, updatedAt }) => (
  React.createElement(
    "ul",
    {
      style: {
        padding: '0px'
      }
    },
    React.createElement( MetaInfoItem, { item: createdAt }),
    React.createElement( MetaInfoItem, { item: createdBy }),
    React.createElement( MetaInfoItem, { item: updatedAt })
  )
);

MetaInfoBlock.defaultProps = {
  createdAt: null,
  createdBy: "",
  updatedAt: null
};

MetaInfoBlock.propTypes = {
  createdAt: PropTypes.oneOfType([ PropTypes.func, PropTypes.date ]),
  createdBy: PropTypes.string,
  updatedAt: PropTypes.oneOfType([ PropTypes.func, PropTypes.date ])
};
