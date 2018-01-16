import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import styles from './styles';


const TextArea = ({ classes, label, name, onChange  }) => (
  <TextField
    multiline
    rows="4"
    label={label}
    name={name}
    id={name}
    onChange={onChange}
    className={classes.textField}
  />
);


TextArea.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  rows: PropTypes.string,
};

export default withStyles(styles)(TextArea);
