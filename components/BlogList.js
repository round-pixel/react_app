const BlogList = ({ posts }) => (
  DOM.div(
    {
      className: 'blog-list'
    },
    posts.map(
      (post, key) => (
        React.createElement(BlogItem, { key: key, image: post.image, message: post.message })
      )
    )
  )
);
