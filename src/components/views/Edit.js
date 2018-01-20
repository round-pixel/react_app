import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import styles from './styles';
import Grid from 'material-ui/Grid';
import TextForm from 'components/Shared/TextForm';
import { Field, reduxForm } from 'redux-form';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';

const validate = values => {
  const errors = {};
  const requiredFields = [
    'title',
    'author',
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
};

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

function EditPost(props) {
  const { classes, handleSubmit, reset, pristine, submiting } = props;
  return (
    <Paper className={classes.content} elevation={4}>
      <Grid container justify="center">
        <Grid item lg={6} md={8} sm={12} xs={12}>
          <Typography type="headline" component="h1">
            Edit post
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
                className={classes.submit}
                onClick={reset}
              >Clear</Button>
            }
            <Button
              raised
              color="primary"
              type="submit"
              value="Update"
              className={classes.submit}
            >
              Update
            </Button>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
}

EditPost.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  reset: PropTypes.func,
};

renderTextField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  meta:  PropTypes.object,
};

export default connect(
  (state) => ({
    initialValues: {
      title: state.post.entry && state.post.entry.message,
      author: state.post.entry && state.post.entry.metaInfo.createdBy,
      createdAt: state.post.entry && state.post.entry.metaInfo.createdAt,
    }
  })
)(reduxForm({
  form: 'editPost',
  enableReinitialize: true,
  validate,
  onSubmit: (values) => alert(JSON.stringify(values))
})(withStyles(styles)(EditPost)));
