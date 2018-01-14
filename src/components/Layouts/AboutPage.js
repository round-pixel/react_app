import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import styles from './styles';

function About(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.content} elevation={4}>
        <Typography type="headline" component="h3">
          {AboutText.header}
        </Typography>
        <Typography component="p">
          {AboutText.info}
        </Typography>
      </Paper>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);

const AboutText = {
  header: 'This is about page of Nature blog',
  info: `Lorem ipsum dolor sit amet, eum no magna nostro incorrupte,
    reque facer docendi eum ex, mollis assentior ne mea. Est veritus
    imperdiet maiestatis ei, quas meliore repudiare duo ex. Ex insolens
    singulis pri, mel cu alii philosophia, at sed semper iisque ullamcorper.
    Id has inani aliquid omittantur, ad eruditi dolorum vix, his ei quis
    singulis pericula. Pro qualisque quaerendum ei, eu diam magna
    libris eam, dicat viderer ad per.`
};
