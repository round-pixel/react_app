import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import styles from './styles';

class Text extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorText: false,
      value: this.props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      errorText: nextProps.errorText,
      value: nextProps.value,
    });
  }

  render() {
    const { classes, label, name, onChange } = this.props;
    const { errorText, value } = this.state;
    return (
      <TextField
        className={classes.textField}
        label={label}
        error={errorText ? true : false}
        helperText={errorText}
        name={name}
        id={name}
        value={ value }
        onChange={onChange}
      />
    );
  }
}

Text.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  errorText: PropTypes.bool,
};

export default withStyles(styles)(Text);
