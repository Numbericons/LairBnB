import merge from 'lodash/merge'
import {RECEIVE_BOOKING} from '../../actions/booking_actions.js'

const bookingsReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOKINGS:
            return merge({}, state, action.bookings)
        case RECEIVE_BOOKING:
            const newBooking = {[action.booking.id]: action.booking};
            return merge({}, state, newBooking)
        default:
            return state;
    }
}

export default bookingsReducer;