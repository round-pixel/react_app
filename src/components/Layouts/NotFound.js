import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import styles from './styles';

const NotFound = () => (
  <Typography
    type="headline"
    component="h1"
    style={
      {
        color: 'red',
        textAlign: 'center',
        marginTop: '30%',
      }
    }
  >
    'Page not found :('
  </Typography>
);

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);
