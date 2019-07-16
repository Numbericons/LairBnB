import merge from 'lodash/merge'
import { RECEIVE_BOOKING, RECEIVE_BOOKINGS, REMOVE_BOOKING} from '../../actions/booking_actions';

const bookingsReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOKINGS:
            return action.bookings;
        case RECEIVE_BOOKING:
            const newBooking = {[action.booking.id]: action.booking};
            return merge({}, state, newBooking)
        case REMOVE_BOOKING:
            const newState = merge({}, state);
            delete newState[action.bookingId.id];
            return newState
        default:
            return state;
    }
}

export default bookingsReducer;