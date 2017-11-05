const BlogItem = ({ id, image, message, metaInfo, likes, addLike }) => (
  DOM.div(
    {
      className: "blog-item",
      style: styles.blogItemStyle
    },
    React.createElement(Image, image),
    React.createElement(TextBox, { message }),
    React.createElement(Like, { likes, addLike, id }),
    React.createElement(MetaInfoBlock, metaInfo)
  )
);

BlogItem.defaultProps = {
  image: null,
  message: "",
  metaInfo: "",
  likes: 0
};

BlogItem.propTypes = {
  image: PropTypes.object,
  message: PropTypes.string,
  metaInfo: PropTypes.object,
  likes: PropTypes.number
};
