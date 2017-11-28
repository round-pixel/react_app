import React from 'react';

import { Card, CardBody, CardHeader } from 'reactstrap';

import ContactList from './elements/ContactList';

const ContactPage = () => (
  <Card>
    <CardHeader>
      { ContactText.header }
    </CardHeader>
    <CardBody>
      <ContactList contacts={ ContactText } />
    </CardBody>
  </Card>
);

export default ContactPage;

const ContactText = {
  header: 'Contacts',
  nick: 'Starmuratovo',
  github: {
    url: 'https://github.com/round-pixel',
    name: 'round-pixel'
  }
};
