import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import styles from './styles';
import Grid from 'material-ui/Grid';
import TextForm from 'components/Shared/TextForm';
import { Field } from 'redux-form';
import Button from 'material-ui/Button';

const renderTextField = ({
  label,
  input: {
    name,
    onChange,
    value
  },
  meta: {
    touched,
    error
  }
}) => (
  <TextForm
    label={label}
    name={name}
    onChange={onChange}
    value={value}
    errorText={ touched && error}
  />
);

function PostForms(props) {
  const { classes, handleSubmit, reset, pristine, submiting, type } = props;
  return (
    <Paper className={classes.content} elevation={4}>
      <Grid container justify="center">
        <Grid item lg={6} md={8} sm={12} xs={12}>
          <Typography type="headline" component="h1">
            {type.header}
          </Typography>
          <form onSubmit={handleSubmit}>
            <Field
              component={renderTextField}
              label="Title"
              name="title"
            />
            <Field
              component={renderTextField}
              label="Author"
              name="author"
            />
            {
              (!pristine && !submiting) &&
              <Button
                raised
                color="default"
                className={classes.button}
                onClick={reset}
              >Clear</Button>
            }
            <Button
              raised
              color="primary"
              type="submit"
              value="Update"
              className={classes.button}
            >
              {type.submit}
            </Button>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
}

PostForms.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  reset: PropTypes.func,
  pristine: PropTypes.bool,
  submiting: PropTypes.bool,
  type: PropTypes.object,
};

renderTextField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  meta:  PropTypes.object,
};

export default withStyles(styles)(PostForms);
