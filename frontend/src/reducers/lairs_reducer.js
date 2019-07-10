import { RECEIVE_ALL_LAIRS } from '../actions/lairs_actions';

const lairsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_LAIRS:
            return action.lairs;
        default:
            return state;
    }
};

export default lairsReducer;