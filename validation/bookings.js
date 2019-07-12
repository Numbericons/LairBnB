const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateBookingInput(data) {
  let errors = {};
  
  // data.num_guests = Validator.isInt(data.num_guests) ? data.num_guests : '';

  if (Validator.isEmpty(data.lair_id)) {
    errors.lair_id = 'Lair ID is required';
  }

  if (Validator.isEmpty(data.guest_id)) {
    errors.guest_id = 'Guest ID is required';
  }
  if (data.num_guests < 1 || data.num_guests > 16) {
  // if (!Validator.isInt(data.num_guests, { min: 1, max: 16 })) {
    errors.num_guests = 'There must be at least 1 guest, with a maximum of 16';
  }

  if (Validator.isEmpty(data.arrival_date) || Validator.isEmpty(data.departure_date)) {
    errors.date = 'You must enter both an arrival and departure date.'
  }

  if (!Validator.isAfter(data.departure_date, data.arrival_date)) {
    errors.date = "Departure date needs to be after the arrival date"
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};