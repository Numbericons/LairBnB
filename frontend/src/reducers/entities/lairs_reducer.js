import merge from 'lodash/merge';
import { RECEIVE_ALL_LAIRS } from '../../actions/lairs_actions';
import { RECEIVE_ONE_LAIR } from '../../actions/lairs_actions';

const lairsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_LAIRS:
            return action.lairs.data;
        case RECEIVE_ONE_LAIR:
            const newLair = { [action.lair._id]: action.lair };
            return merge({}, state, newLair);
        default:
            return state;
    }
};

export default lairsReducer;