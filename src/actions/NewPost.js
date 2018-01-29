import * as types from 'constants/actionTypes/NewPost';
import { API_CALL } from 'middleware/API';

export function newPost(values) {
  return {
    [API_CALL]: {
      endpoint: '/posts',
      method: 'POST',
      query: {values},
      types: [
        types.CREATE_POST_REQUEST,
        types.CREATE_POST_SUCCESS,
        types.CREATE_POST_ERROR
      ]
    }
  };
}
