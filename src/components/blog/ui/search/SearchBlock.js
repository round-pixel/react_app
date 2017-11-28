import React from 'react';

import { Button, Form, FormGroup, Input } from 'reactstrap';

class SeacrhBlock extends React.Component {
  constructor(props)  {
    super(props);
  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <Input id="search" />
          <Button>Search</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default SeacrhBlock;
