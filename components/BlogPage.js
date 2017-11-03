class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts };
    this.addLike = this.addLike.bind(this);
    this.likeStat = this.likeStat.bind(this);
  }

  addLike(id) {
    let { posts } = this.state;
    let post = posts[ posts.findIndex(x => x.id == id)];
    post.likes ? post.likes += 1 : post.likes = 1;
    this.setState({ posts: posts})
  }

  likeStat(posts) {
    let like_arr = [];
    posts.map(
      (post) => (
        like_arr.push([
          post.message ? post.message : '',
          post.likes ? post.likes : 0
        ])
      )
    );
    return like_arr;
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
