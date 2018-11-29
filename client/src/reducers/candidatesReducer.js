import { FETCH_CANDIDATES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CANDIDATES:
      return [...action.payload];
    default:
      return state;
  }
}
