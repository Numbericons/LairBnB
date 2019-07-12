import axios from 'axios';

export const getBookingsByUserId = (userId) => {
  return axios.get('/api/bookings/by_user', userId)
};

export const postBooking = (booking) => {
  return axios.post('/api/bookings', booking)
};