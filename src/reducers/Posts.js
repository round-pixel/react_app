import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/PostsActionTypes';
import * as likeTypes from 'constants/actionTypes/AddLike';
import update from 'immutability-helper';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

function addLike(posts, id, count) {
  const index = posts.findIndex((post) => post.id == id);
  return update(
    posts,
    { [index]: { likes: { $apply: () => count + 1 } } }
  );
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, { entries: action.response });
    case likeTypes.ADD_LIKE: {
      const id = action.id;
      const count = action.count;
      return assign({}, state, { entries: addLike(state.entries, id, count) });
    }
    default:
      return state;
  }
}
