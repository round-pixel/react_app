const BlogItem = ({ image, message, metaInfo, likes }) => (
  DOM.div(
    {
      className: "blog-item"
    },
    React.createElement(Image, image),
    React.createElement(TextBox, { message }),
    React.createElement(Like, { likes }),
    React.createElement(MetaInfoBlock, metaInfo)
  )
);

BlogItem.defaultProps = {
  image: "https://tasmedes.nl/wp-content/themes/nucleare-pro/images/no-image-box.png",
  message: "",
  metaInfo: "",
  likes: 0
};

BlogItem.propTypes = {
  image: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  message: PropTypes.string,
  metaInfo: PropTypes.oneOfType([ PropTypes.string, PropTypes.date ]),
  likes: PropTypes.number
};
