const TextBox = ({ message }) => (
  DOM.span(
    {
      style: {
        marginLeft: '20px',
      }
    },
    message
  )
);

TextBox.defaultProps = {
  message: ""
};

TextBox.propTypes = {
  message: PropTypes.string
};
