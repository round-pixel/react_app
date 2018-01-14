import { connect } from 'react-redux';
import SearchBlock from 'components/ToolBar/SearchBlock';
import { fetchPosts } from 'actions/Posts';

const mapActionsToProps = (dispatch) => ({
  search: (text) => {
    dispatch(fetchPosts({ search: text }));
  }
});

export default connect(null, mapActionsToProps)(SearchBlock);
