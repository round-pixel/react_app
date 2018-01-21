import { connect } from 'react-redux';
import EditPost from 'components/views/Edit';
import { reduxForm } from 'redux-form';
import { updatePost } from 'actions/EditPost';

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

const mapStateToProps = (state) => ({
  initialValues: {
    id: state.post.entry && state.post.entry.id,
    title: state.post.entry && state.post.entry.message,
    author: state.post.entry && state.post.entry.metaInfo.createdBy,
    createdAt: state.post.entry && state.post.entry.metaInfo.createdAt,
  }
});

export default connect(mapStateToProps)(reduxForm({
  form: 'editPost',
  enableReinitialize: true,
  validate,
  onSubmit: (values, dispatch, props) => {
    dispatch(updatePost(values));
    props.history.push(`/posts/${props.initialValues.id}`);
  }
})(EditPost));
