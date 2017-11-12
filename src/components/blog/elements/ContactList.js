import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

const ContactList = ({ contacts }) => (
  <ul>
    <li>
      { contacts.nick && `Thinknetica nick: ${contacts.nick}`}
    </li>
    <li>
      <span> Github nick: </span>
      <Link href={ contacts.github.url }>
        { contacts.github.name }
      </Link>
    </li>
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.object
};

export default ContactList;
