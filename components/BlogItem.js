const BlogItem = ({ image, message }) => (
  DOM.div(
    {
      className: 'blog-item'
    },
    React.createElement(Image, image),
    React.createElement(TextBox, { message })
  )
);
