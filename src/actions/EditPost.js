import * as types from 'constants/actionTypes/PostActionTypes';
import { API_CALL } from 'middleware/API';

export function updatePost(id, values) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${id}/edit`,
      method: 'PUT',
      query: {values},
      types: [
        types.FETCH_POST_REQUEST,
        types.FETCH_POST_SUCCESS,
        types.FETCH_POST_ERROR
      ]
    }
  };
}
