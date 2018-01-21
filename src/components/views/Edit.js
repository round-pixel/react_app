import EditForm from 'components/Shared/PostForms';
import React from 'react';

const type = {
  header: 'Update post',
  submit: 'update',
};

const Edit = (props) => (
  <EditForm type={type} {...props}  />
);

export default Edit;
