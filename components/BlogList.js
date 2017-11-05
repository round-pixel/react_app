const BlogList = ({ posts, addLike }) => (
  DOM.div(
    {
      className: "blog-list",
      style: styles.blogListStyle
    },
    posts.map(
      (post) => (
        React.createElement(
          BlogItem,
          {
            key: post.id,
            id: post.id,
            image: post.image,
            message: post.message,
            metaInfo: post.metaInfo,
            likes: post.likes,
            addLike
          }
        )
      )
    )
  )
);
