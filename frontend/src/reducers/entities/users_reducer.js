import { RECEIVE_CURRENT_USER, RECEIVE_A_USER, RECEIVE_USERS } from '../../actions/session_actions';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_A_USER:
      return Object.assign({}, state, {[action.user.id]: action.user})
    case RECEIVE_USERS:
      return Object.assign({}, state, action.users)
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.currentUser.id]: action.currentUser})
    default:
      return state;
  }
}

export default usersReducer