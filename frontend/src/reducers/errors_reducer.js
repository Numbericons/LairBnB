import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/errors_actions";

const errorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {};
    case RECEIVE_ERRORS:
      return action.errors || {}
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}

export default errorsReducer;