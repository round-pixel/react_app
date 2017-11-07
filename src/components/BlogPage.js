import React from 'react';
import DOM from 'react-dom-factories';
import update from 'immutability-helper';

import posts from './constants/static/posts';
import BlogList from './BlogList';
import PieChart from './PieChart';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts };
    this.addLike = this.addLike.bind(this);
    this.likeStat = this.likeStat.bind(this);
  }

  addLike(id) {
    const { posts } = this.state;
    const index = posts.findIndex((post) => post.id == id );
    this.setState({
      posts: update(
        posts,
        { [index]: { likes: { $apply: (x) => x ? x + 1 : 1 } } }
      )
    });
  }

  likeStat(posts) {
    const likeArr = [];
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
    const posts = this.state.posts;
    return (
      DOM.div(
        null,
        React.createElement(
          BlogList,
          { posts , addLike: this.addLike }
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

export default BlogPage;
