import lairsReducer from './lairs_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
    lairs: lairsReducer
});

export default entitiesReducer;