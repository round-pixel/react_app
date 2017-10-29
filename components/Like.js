class Like extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: props.likes }
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 })
  };

  render() {
    return (
      DOM.div(
        null,
        DOM.p(null, `Likes: ${ this.state.count }`),
        DOM.button(
          {
            style: {
              background: '#51ABC5',
              border: 'none',
              borderRadius: '5px',
              color: 'white',
              padding: '10px 20px',
            },
            onClick: this.handleClick.bind(this)
          },
          "Like"
        )
      )
    )
  }
};

Like.defaultProps = {
  count: 0
};

Like.propTypes = {
  count: PropTypes.number
};
