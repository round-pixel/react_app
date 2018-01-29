import * as types from 'constants/actionTypes/UpdatePost';
import { API_CALL } from 'middleware/API';

export function updatePost(values) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${values.id}`,
      method: 'PUT',
      query:{values},
      types: [
        types.UPDATE_POST_REQUEST,
        types.UPDATE_POST_SUCCESS,
        types.UPDATE_POST_ERROR
      ]
    }
  };
}
