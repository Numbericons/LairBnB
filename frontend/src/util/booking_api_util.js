import axios from 'axios';

export const getBookingsByUserId = (userId) => {
  return axios.get(`/api/bookings/users/${userId}`)
};

export const postBooking = (booking) => {
  return axios.post('/api/bookings', booking)
};