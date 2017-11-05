class Like extends React.Component {

  addLike = ( id ) => this.props.addLike(id);

  render() {
    return (
      DOM.div(
        null,
        DOM.p(null, `Likes: ${ this.props.likes }`),
        DOM.button(
          {
            style: styles.likeStyle,
            onClick: () => this.addLike(this.props.id)
          },
          "Like"
        )
      )
    )
  }
};
