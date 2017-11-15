import React from 'react';
import update from 'immutability-helper';

import { Row, Col } from 'reactstrap';

import { Route } from 'react-router-dom';

import request from 'superagent';

import BlogList from './BlogList';
import PieChart from './PieChart';
import Post from 'components/blog/ui/Post';

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
          <Route exact path="/" render={ () =>
            <BlogList posts={ posts } addLike={ this.addLike }/> }
          />
          <Route path="/posts/:id" component={ Post } />
        </Col>
        <Col lg="4">
          <Route exact path="/" render={ () =>
            <PieChart columns={ this.likeStat(posts) } /> }
          />
        </Col>
      </Row>
    );
  }
}

export default BlogPage;
