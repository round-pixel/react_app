import React from 'react';
import update from 'immutability-helper';

import { Row, Col } from 'reactstrap';

import request from 'superagent';

import BlogList from './BlogList';
import PieChart from './PieChart';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
    this.addLike = this.addLike.bind(this);
    this.likeStat = this.likeStat.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  addLike(id) {
    const { posts } = this.state;
    const index = posts.findIndex((post) => post.id == id);
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

  fetchPosts() {
    request.get(
      'http://localhost:3002/',
      {},
      (err, res) => this.setState({ posts: res.body })
    );
  }

  render() {
    const posts = this.state.posts;

    return (
      <Row>
        <Col lg="8">
          <BlogList posts={ posts } addLike={ this.addLike } />
        </Col>
        <Col lg="4">
          <PieChart columns={ this.likeStat(posts) } />
        </Col>
      </Row>
    );
  }
}

export default BlogPage;
