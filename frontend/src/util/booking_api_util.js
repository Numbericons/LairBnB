import axios from 'axios';

export const getBookingsByUserId = (userId) => {
  return axios.get(`/api/bookings/users/${userId}`)
};

export const postBooking = (booking) => {
  return axios.post('/api/bookings', booking)
};

export const getBookings = () => {
  return axios.get(`/api/bookings`)
};

export const getBooking = (bookingId) => {
  return axios.get(`/api/bookings/${bookingId}`)
};

export const deleteBooking = (bookingId) => {
  return axios.delete(`/api/bookings/${bookingId}`)
};
