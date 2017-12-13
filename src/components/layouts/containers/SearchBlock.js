import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class SeacrhBlock extends React.Component {
  constructor() {
    super();
    this.state = { search: '' };
  }

  setSearch(e) {
    this.setState({search: e.target.value});
  }

  render() {
    const search = this.props.search;
    return (
      <Form inline>
        <FormGroup>
          <Input ref="search" id="search" onChange={ this.setSearch.bind(this) }/>
          <Button onClick={ () => search(this.state.search) }>Search</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default SeacrhBlock;

SeacrhBlock.propTypes = {
  search: PropTypes.func
};
