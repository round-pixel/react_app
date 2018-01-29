import NewForm from 'components/Shared/PostForms';
import React from 'react';

const type = {
  header: 'New post',
  submit: 'create',
};

const New = (props) => (
  <NewForm type={type} {...props}  />
);


export default New;
