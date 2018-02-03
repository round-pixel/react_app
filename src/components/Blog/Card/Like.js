import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui-icons/Favorite';
import FavoriteIconBorder from 'material-ui-icons/FavoriteBorder';
import { withStyles } from 'material-ui/styles';
import styles from './styles';

class Like extends Component {
  constructor(props) {
    super(props);

    this.state = { liked: false };
  }

  fetchLike(id, type) {
    this.setState({ liked: !this.state.liked });
    this.props.addLike(id, type);
  }

  render() {
    const {  likes, id, classes } = this.props;
    const isLiked = this.state.liked;
    let icon = null;
    if (isLiked) {
      icon = (
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon
            onClick={ () => this.fetchLike(id, 'remove') }
            style={{color: 'red'}}
            className="addLike"
          />
        </IconButton>
      );
    } else {
      icon = (
        <IconButton aria-label="Add to favorites">
          <FavoriteIconBorder
            onClick={ () => this.fetchLike(id, 'add') }
            className="addLike"
          />
        </IconButton>
      );
    }

    return (
      <div>
        <div className={`${classes.likeCount} likeCount`}>
          {likes}
        </div>
        {icon}
      </div>
    );
  }
}

Like.propTypes = {
  addLike: PropTypes.func,
  likes: PropTypes.number,
  id: PropTypes.number,
  classes: PropTypes.object,
};

export default withStyles(styles)(Like);
