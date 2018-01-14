import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardMedia } from 'material-ui/Card';
import styles from './styles';

function Image(props) {
  const { classes, image } = props;

  return (
    <CardMedia
      className={classes.media}
      image={image.src}
      title="Contemplative Reptile"
    />
  );
}

Image.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.object,
};

export default withStyles(styles)(Image);
