import { postBooking, getBookingsByUserId, getBookings, getBooking, deleteBooking } from '../util/booking_api_util';
import { receiveErrors } from './errors_actions';
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const REMOVE_BOOKING = "REMOVE_BOOKING";

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

export const removeBooking = (bookingId) => {
  return ({
    type: REMOVE_BOOKING,
    bookingId
  })
}

export const fetchBookings = () => dispatch => {
  return getBookings()
    .then(payload => dispatch(receiveBookings(payload.data)))
}

export const fetchBooking = (bookingId) => dispatch => {
  return getBooking(bookingId)
    .then(payload => dispatch(receiveBookings(payload)))
}

export const destroyBooking = (bookingId) => dispatch => {
  return deleteBooking(bookingId)
    .then(payload => {
      dispatch(removeBooking(payload.data.id))
    })
}

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