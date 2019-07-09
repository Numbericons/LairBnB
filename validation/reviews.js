const Validator = require('validator');
const validText = require('./valid-text');


module.exports = function validateBookingInput(data) {
  let errors = {};

  data.body = validText(data.body) ? data.body : '';

  if (Validator.isEmpty(data.rating)) {
    errors.rating = "This field is required."
  }

  if (!Validator.isInt(data.rating, { min: 1, max: 5 })) {
    errors.rating = 'Rating must be between 1 and 5';
  }

  if (Validator.isEmpty(data.body)) {
    errors.body = "This field is required"
  }

  if (!Validator.isLength(data.body, { min: 1, max: 255 })) {
    errors.body = 'Body must be between 1 and 255 characters';
  }

  

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};