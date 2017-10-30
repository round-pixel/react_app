const BlogList = ({ posts }) => (
  DOM.div(
    {
      className: "blog-list"
    },
    posts.map(
      (post, key) => (
        React.createElement(
          BlogItem,
          {
            key: key,
            image: post.image,
            message: post.message,
            metaInfo: post.metaInfo,
            likes: post.likes
          }
        )
      )
    )
  )
);

BlogList.defaultProps = {
  posts: null // [{}]
};

BlogList.propTypes = {
  posts: PropTypes.array
};
