import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/PostActionTypes';
import * as likeTypes from 'constants/actionTypes/AddLike';
import * as editTypes from 'constants/actionTypes/UpdatePost';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, initialState, { entry: action.response });
    case likeTypes.ADD_LIKE:
      return assign({}, initialState, { entry: action.response });
    case editTypes.UPDATE_POST_REQUEST:
      return assign({}, state, { isFetching: true });
    case editTypes.UPDATE_POST_ERROR:
      return assign({}, state, { error: true });
    case editTypes.UPDATE_POST_SUCCESS:
      return assign({}, state, { entry: action.response });
    default:
      return state;
  }
}
