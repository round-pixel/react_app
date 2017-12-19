import * as likeTypes from 'constants/actionTypes/AddLike';
import { API_CALL } from 'middleware/API';

export function addLike(id, query) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${id}`,
      method: 'POST',
      query,
      types: [
        likeTypes.FETCH_LIKE_REQUEST,
        likeTypes.ADD_LIKE,
        likeTypes.ADD_LIKE_ERROR
      ]
    }
  };
}
