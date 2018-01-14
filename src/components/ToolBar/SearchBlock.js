import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import styles from './styles';

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
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off" onSubmit={ this.handleSubmit.bind(this) }>
        <TextField
          id="search"
          label="Find posts"
          type="search"
          className={classes.textField}
          margin="normal"
          onChange={ this.setSearch.bind(this) }
        />
      </form>
    );
  }
}

export default withStyles(styles)(SeacrhBlock);

SeacrhBlock.propTypes = {
  search: PropTypes.func,
  classes: PropTypes.object,
};
