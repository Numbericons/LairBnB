import { combineReducers } from 'redux';
import lairsReducer from './lairs_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  lairs: lairsReducer
});

export default entitiesReducer;