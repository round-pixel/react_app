import { connect } from 'react-redux';
import SearchBlock from 'components/layouts/containers/SearchBlock';
import { searchFilter } from 'actions/Search';

const mapActionsToProps = (dispatch) => ({
  search: (filter) => {
    dispatch(searchFilter(filter));
  }
});

export default connect(null, mapActionsToProps)(SearchBlock);
