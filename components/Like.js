class Like extends React.Component {

  addLike(id) {
    this.props.addLike(this.props.id);
  }

  render() {
    return (
      DOM.div(
        null,
        DOM.p(null, `Likes: ${ this.props.likes }`),
        DOM.button(
          {
            style: {
              background: '#51ABC5',
              border: 'none',
              borderRadius: '5px',
              color: 'white',
              padding: '10px 20px',
            },
            onClick: this.addLike.bind(this)
          },
          "Like"
        )
      )
    )
  }
};
