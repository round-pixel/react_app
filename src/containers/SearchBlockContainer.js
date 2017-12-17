import { connect } from 'react-redux';
import SearchBlock from 'components/layouts/containers/SearchBlock';
import { fetchPosts } from 'actions/Posts';

const mapActionsToProps = (dispatch) => ({
  search: (text) => {
    dispatch(fetchPosts({ search: text }));
  }
});

export default connect(null, mapActionsToProps)(SearchBlock);
