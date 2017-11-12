import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'reactstrap';
import styles from '../../constants/styles';

class Like extends React.Component {
  addLike(id) {
    return this.props.addLike(id);
  }

  render() {
    return (
      <div>
        <div className="float-left" style={ styles.likeStyle }>
          Likes: { this.props.likes }
        </div>
        <Button
          className="float-right"
          color="danger"
          onClick={ () => this.addLike(this.props.id) }>
          Like
        </Button>
      </div>
    );
  }
}

Like.propTypes = {
  addLike: PropTypes.func,
  likes: PropTypes.number,
  id: PropTypes.number
};

export default Like;
