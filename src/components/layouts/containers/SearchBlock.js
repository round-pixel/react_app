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

  handleSubmit(e) {
    e.preventDefault();
    const search = this.props.search;
    return search(this.state.search);
  }

  render() {
    return (
      <Form inline onSubmit={ this.handleSubmit.bind(this) }>
        <FormGroup>
          <Input ref="search" id="search" onChange={ this.setSearch.bind(this) }/>
          <Button>Search</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default SeacrhBlock;

SeacrhBlock.propTypes = {
  search: PropTypes.func
};
