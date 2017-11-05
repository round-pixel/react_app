class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts };
    this.addLike = this.addLike.bind(this);
    this.likeStat = this.likeStat.bind(this);
  }

  addLike(id) {
    let { posts } = this.state;
    let index = posts.findIndex((post) => post.id == id );
    this.setState({
      posts: update(
        posts,
        { [index]: { likes: { $apply: (x) => x ? x + 1 : 1 } } }
      )
    })
  }

  likeStat(posts) {
    let likeArr = [];
    posts.map(
      (post) => (
        likeArr.push([
          post.message ? post.message : '',
          post.likes ? post.likes : 0
        ])
      )
    );
    return likeArr;
  }

  render() {
    let posts = this.state.posts;
    return (
      DOM.div(
        null,
        React.createElement(
          BlogList,
          { posts: posts , addLike: this.addLike }
        ),
        React.createElement(
          PieChart,
          {
            columns: this.likeStat(posts)
          }
        )
      )
    );
  }
}
