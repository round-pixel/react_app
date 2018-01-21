import { connect } from 'react-redux';
import NewPost from 'components/views/New';
import { reduxForm } from 'redux-form';
import { newPost } from 'actions/NewPost';

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

const mapStateToProps = () => ({
  initialValues: {
    title: '',
    author: '',
  }
});

export default connect(mapStateToProps)(reduxForm({
  form: 'newPost',
  enableReinitialize: true,
  validate,
  onSubmit: (values, dispatch) => dispatch(newPost(values))
})(NewPost));
