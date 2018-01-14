import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import styles from './styles';
import Link from 'components/Shared/Link';

function ToolBar(props) {
  const { classes } = props;
  return (
    <Toolbar className={classes.container} >
      <Link to="/" className={`${classes.link} ${classes.flex}`}>
        <Typography type="title" color="inherit" style={{fontWeight: 'bolder'}}>
          Nature
        </Typography>
      </Link>
      <Link to="/contact" className={classes.link}>
        <Button color="inherit" className={classes.button}>Contact</Button>
      </Link>
      <Link to="/about" className={classes.link}>
        <Button color="inherit" className={classes.button}>About</Button>
      </Link>
    </Toolbar>
  );
}

ToolBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToolBar);
