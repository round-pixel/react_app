const TextBox = ({ message }) => (
  DOM.span(
    {
      style: styles.textBoxStyle
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
