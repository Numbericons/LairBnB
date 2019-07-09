import { combineReducers } from 'redux';
import session from './session_api_reducer';

const RootReducer = combineReducers({
  session
});

export default RootReducer;