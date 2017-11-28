import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => (
  <ul>
    <li>
      { contacts.nick && `Thinknetica nick: ${contacts.nick}`}
    </li>
    <li>
      <span> Github nick: </span>
      <a href={ contacts.github.url }>
        { contacts.github.name }
      </a>
    </li>
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.object
};

export default ContactList;
