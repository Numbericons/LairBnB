import { postBooking, getBookingsByUserId } from '../util/booking_api_util';
import { receiveErrors } from './errors_actions';
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";

export const receiveBooking = (booking) => {
    return ({
        type: RECEIVE_BOOKING,
        booking
    })
};

export const receiveBookings = (bookings) => {
  return ({
    type: RECEIVE_BOOKINGS,
    bookings
  })
};

export const receiveBookingsByUserId = userId => dispatch => {
  return getBookingsByUserId(userId)
    .then(payload => dispatch(receiveBookings(payload.data)))
}

export const createBooking = (booking) => (dispatch) => {
    return postBooking(booking)
        .then(booking => {
          return dispatch(receiveBooking(booking.data))
        }, err => {
            dispatch(receiveErrors(err.response.data))
        })
}