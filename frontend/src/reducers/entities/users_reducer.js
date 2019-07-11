import {
  RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER,
} from '../../actions/session_actions';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.currentUser.id]: action.currentUser})
    case RECEIVE_USER_LOGOUT:
      return {}
    default:
      return state;
  }
}

export default usersReducer