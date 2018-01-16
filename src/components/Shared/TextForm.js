import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import styles from './styles';

class Text extends Component {
  constructor(props) {
    super(props);

    this.state = { error: false };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ error: nextProps.error });
    // console.log(nextProps);
  }

  render() {
    const { classes, label, name, onChange, error } = this.props;
    return (
      <TextField
        label={label}
        error={error}
        name={name}
        id={name}
        onChange={onChange}
        className={classes.textField}
      />
    );
  }
}

Text.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
};

export default withStyles(styles)(Text);
