import { connect } from 'react-redux';
import Like from 'components/blog/elements/Like';
import { addLike } from 'actions/Like';

const stateToProps = (state, ownProps) => ({
  likes: ownProps.likes,
  id: ownProps.id
});

const mapActionsToProps = (dispatch) => ({
  addLike: (id, like) => {
    dispatch(addLike(id, { like }));
  }
});

export default connect(stateToProps, mapActionsToProps)(Like);
