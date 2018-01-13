import { compact } from 'lodash/array';
import { map } from 'lodash/collection';

export default function(store, state) {
  const { location, query, params, routes } = state;
  const prepareDataFns = compact(map(routes, route => route.prepareData));
  
  return map(
    prepareDataFns,
    prepareData => prepareData(store, query, params, location)
  );
}
