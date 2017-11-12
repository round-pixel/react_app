import React from 'react';

import { Card, CardText, CardBody, CardHeader } from 'reactstrap';

import ContactList from 'components/blog/elements/ContactList';

const ContactPage = () => (
  <Card>
    <CardHeader>
      { ContactText.header }
    </CardHeader>
    <CardBody>
      <CardText>
        <ContactList contacts={ ContactText } />
      </CardText>
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
