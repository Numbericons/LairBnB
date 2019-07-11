import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT } from '../actions/session_actions';


export default function(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {id: action.currentUser.id})
    case RECEIVE_USER_LOGOUT:
      return {}
    default:
      return state;
  }
}