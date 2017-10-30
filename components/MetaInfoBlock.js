const MetaInfoBlock = ({ createdAt, createdBy, updatedAt }) => (
  React.createElement(
    "ul",
    {
      style: {
        padding: '0px'
      }
    },
    createdAt && React.createElement( MetaInfoItem, { item: `Созданно: ${ dateToString(createdAt) }` }),
    createdBy && React.createElement( MetaInfoItem, { item: `Автор: ${ createdBy }` }),
    updatedAt && React.createElement( MetaInfoItem, { item: `Обновленно: ${ dateToString(updatedAt) }` })
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

function dateToString(date) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss');
};
