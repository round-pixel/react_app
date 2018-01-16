import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextForm from 'components/Shared/TextForm';
import TextAreaForm from 'components/Shared/TextAreaForm';
import Button from 'material-ui/Button';
import styles from './styles';
import Grid from 'material-ui/Grid';
import { set, assign } from 'lodash/object';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: '',
        },
        errors: {
          email: false,
        }
      }
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(this.state.form.values));
  }

  clearError(fieldName) {
    this.setState(
      set(
        assign({}, this.state),
        ['form', 'errors', fieldName],
        false
      )
    );
  }

  handleChange(fieldName) {
    return (e) => {
      switch (fieldName) {
        case 'email':
          this.clearError('email');
          if (e.target.value.length < 3)
            this.setState(
              set(
                assign({}, this.state),
                ['form', 'errors', 'email'],
                true
              )
            );
          break;
      }

      this.setState(
        set(
          assign({}, this.state),
          ['form', 'values', fieldName],
          e.target.value
        )
      );
    };
  }

  render() {
    const { classes } = this.props;
    const { fullName, email } = this.state.form.values;
    return (
      <Paper className={classes.content} elevation={4}>
        <Grid container  justify="center">
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <Typography type="headline" component="h1">
              Contacts
            </Typography>
            <form className={classes.container} noValidate autoComplete="off" onSubmit={ this.onSubmit }>
              <TextForm
                label="Full Name"
                name={fullName}
                value={fullName}
                onChange={this.handleChange('fullName')}
              />
              <TextForm
                label="Email"
                error={this.state.form.errors.email}
                name={email}
                value={email}
                onChange={this.handleChange('email')}
              />
              <TextAreaForm
                label="Message"
                name={email}
                value={email}
                onChange={this.handleChange('message')}
              />
              <Button
                raised
                color="primary"
                type="submit"
                value="submit"
                className={classes.submit}
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
