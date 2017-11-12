import React from 'react';

import { Card, CardText, CardBody, CardHeader } from 'reactstrap';

const AboutPage = () => (
  <Card>
    <CardHeader>
      { AboutText.header }
    </CardHeader>
    <CardBody>
      <CardText>
        { AboutText.info }
      </CardText>
    </CardBody>
  </Card>
);

export default AboutPage;

const AboutText = {
  header: 'This is about page of Nature blog',
  info: `Lorem ipsum dolor sit amet, eum no magna nostro incorrupte,
    reque facer docendi eum ex, mollis assentior ne mea. Est veritus
    imperdiet maiestatis ei, quas meliore repudiare duo ex. Ex insolens
    singulis pri, mel cu alii philosophia, at sed semper iisque ullamcorper.
    Id has inani aliquid omittantur, ad eruditi dolorum vix, his ei quis
    singulis pericula. Pro qualisque quaerendum ei, eu diam magna
    libris eam, dicat viderer ad per.`
};
