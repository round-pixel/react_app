import { SEARCH_FILTER } from 'constants/actionTypes/Search';

const search = (filter) => ({
  type: SEARCH_FILTER,
  filter
});

export function searchFilter(filter) {
  return (dispatch) => {
    dispatch(search(filter));
  };
}
