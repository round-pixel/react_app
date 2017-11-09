import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../constants/styles';

class Like extends React.Component {
  addLike(id) {
    return this.props.addLike(id);
  }

  render() {
    return (
      <div>
        <p>Likes: {this.props.likes}</p>
        <button style={ styles.likeStyle } onClick={ () => this.addLike(this.props.id) }>
          Like
        </button>
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
