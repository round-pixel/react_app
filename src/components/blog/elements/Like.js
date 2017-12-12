import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'reactstrap';
import styles from 'constants/styles';

const Like = ({ likes, id, addLike }) => (
  <div>
    <div className="float-left" style={ styles.likeStyle }>
      Likes: { likes }
    </div>
    <Button
      className="float-right"
      color="danger"
      onClick={ () => addLike(id, likes) }
    >
      Like
    </Button>
  </div>
);

Like.propTypes = {
  addLike: PropTypes.func,
  likes: PropTypes.number,
  id: PropTypes.number
};

export default Like;
