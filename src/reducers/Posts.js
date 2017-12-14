import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/PostsActionTypes';
import * as likeTypes from 'constants/actionTypes/AddLike';
import update from 'immutability-helper';
import { SEARCH_FILTER } from 'constants/actionTypes/Search';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

function addLike(posts, id, count) {
  if (posts) {
    const index = posts.findIndex((post) => post.id == id);
    return update(
      posts,
      { [index]: { likes: { $apply: () => count + 1 } } }
    );
  }
  return posts;
}

function filtered(posts, filter) {
  if (posts) {
    return posts.filter((post) =>
      post.message
        .toLowerCase()
        .indexOf(filter.toLowerCase()) !== -1
    );
  }
  return posts;
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
    case SEARCH_FILTER: {
      const filter = action.filter;
      return assign({}, state, { entries: filtered(state.entries, filter) });
    }
    default:
      return state;
  }
}
