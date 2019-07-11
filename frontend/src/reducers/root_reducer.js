import { combineReducers } from 'redux';
import sessionReducer from './session_api_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities/entities_reducer';

const RootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer
});

export default RootReducer;