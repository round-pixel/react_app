import React from 'react';
import PropTypes from 'prop-types';

import request from 'superagent';
import BlogItem from './BlogItem';
import BlogPage from './BlogPage';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = { post: {} };
  }

  componentDidMount() {
    const postId = this.props.params.id;
    this.fetchPost(postId);
  }

  fetchPost(id) {
    request.get(
      'http://localhost:3002/',
      {},
      (err, res) => this.setState({ post: res.body[id - 1] })
    );
  }

  render() {
    const post = this.state.post;

    return (
      <BlogPage>
        <BlogItem
          key={ post.id }
          id={ post.id }
          message={ post.message }
          image={ post.image }
          metaInfo={ post.metaInfo }
          likes={ post.likes }
          addLike={ this.props.addLike }
        />
      </BlogPage>
    );
  }
}

Post.defaultProps = {
  post: {
    id: null,
    image: {},
    message: '',
    metaInfo: {},
    likes: null
  }
};

Post.propTypes = {
  params: PropTypes.object,
  addLike: PropTypes.func
};

export default Post;
