const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateBookingInput(data) {
  let errors = {};
  
  data.lair_id = Validator.isInt(data.lair_id) ? data.lair_id : '';
  data.guest_id = Validator.isInt(data.guest_id) ? data.guest_id : '';
  data.num_guests = Validator.isInt(data.num_guests) ? data.num_guests : '';
//   data.arrival_date
//   data.departure_date

  if (Validator.isEmpty(data.lair_id)) {
    errors.lair_id = 'Lair ID is required';
  }

  if (Validator.isEmpty(data.guest_id)) {
    errors.guest_id = 'Guest ID is required';
  }

  if (!Validator.isInt(data.num_guests, { min: 1, max: 16 })) {
    errors.num_guests = 'There must be at least 1 guest, with a maximum of 16';
  }

  if (Validator.isEmpty(data.num_guests)) {
    errors.num_guests = 'Number of guests field is required';
  }

  if (Validator.isAfter(data.departure_date, data.arrival_date)) {
    errors.date = "Departure date needs to be after the arrival date"
  }

  if (Validator.isBefore(data.arrival_date, data.departure_date)) {
    errors.date = "Arrival date needs to be before the departure date"
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};