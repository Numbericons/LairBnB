
import { RECEIVE_BOUNDS } from '../../actions/lair_actions.js'

const filtersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOUNDS:
      return Object.assign({}, state, {bounds: action.bounds})
    default:
      return state;
  }
}

export default filtersReducer;