import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import styles from './styles';

function Body(props) {
  // eslint-disable-next-line
  const { classes } = props;

  return (
    <CardContent>
      <Typography component="p">
        This impressive paella is a perfect party dish and a fun meal to cook together with
        your guests. Add 1 cup of frozen peas along with the mussels, if you like.
      </Typography>
    </CardContent>
  );
}

Body.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Body);
