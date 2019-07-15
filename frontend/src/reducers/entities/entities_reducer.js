import { combineReducers } from 'redux';
import lairsReducer from './lairs_reducer';
import usersReducer from './users_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  lairs: lairsReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;