import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Header from 'components/Header';
import styles from './styles';
// import ToolBar from 'components/ToolBar';

function MainLayout(props) {
  const { children, classes } = props;

  return (
    <div>
      <Header />
      {/*
        <Grid container  justify="center" className={classes.root}>
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <ToolBar />
          </Grid>
        </Grid>
      */}
      <Grid container  justify="center" className={classes.root}>
        <Grid item lg={6} md={8} sm={12} xs={12}>
          { children }
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(MainLayout);

MainLayout.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.object,
};
