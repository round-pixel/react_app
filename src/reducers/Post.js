import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/PostActionTypes';
import * as likeTypes from 'constants/actionTypes/AddLike';
import update from 'immutability-helper';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

function addLike(post, id, count) {
  if (post) {
    return update(
      post,
      { likes: { $apply: () => count + 1 } }
    );
  }
  return post;
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, initialState, { entry: action.response });
    case likeTypes.ADD_LIKE: {
      const id = action.id;
      const count = action.count;
      return assign({}, state, { entry: addLike(state.entry, id, count) });
    }
    default:
      return state;
  }
}
