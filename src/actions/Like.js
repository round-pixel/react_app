import * as likeTypes from 'constants/actionTypes/AddLike';

const fetchLike = (id, count) => ({
  type: likeTypes.ADD_LIKE,
  id,
  count
});

export function addLike(id, count) {
  return (dispatch) => {
    dispatch(fetchLike(id, count));
  };
}
