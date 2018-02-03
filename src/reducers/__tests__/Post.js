import reducer from 'reducers/Post';
import * as types from 'constants/actionTypes/PostActionTypes';

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isFetching: false,
        error: false,
        entry: null
      }
    );
  });

  it('should fetch post request', () => {
    expect(
      reducer([], {
        type: types.FETCH_POST_REQUEST
      })
    ).toEqual(
      {
        isFetching: true,
        error: false,
        entry: null
      }
    );
  });

  it('should return error', () => {
    expect(
      reducer([], {
        type: types.FETCH_POST_ERROR,
      })
    ).toEqual(
      {
        isFetching: false,
        error: true,
        entry: null
      }
    );
  });

  it('should return post', () => {
    let post = { message: 'Hello world' };
    expect(
      reducer([], {
        type: types.FETCH_POST_SUCCESS,
        response: post
      })
    ).toEqual(
      {
        isFetching: false,
        error: false,
        entry: post
      }
    );
  });
});
