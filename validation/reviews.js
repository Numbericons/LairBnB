const Validator = require('validator');
const validText = require('./valid-text');


module.exports = function validateBookingInput(data) {
  let errors = {};

  data.body = validText(data.body) ? data.body : '';

  if (Validator.isEmpty(data.accuracy)) {
    errors.accuracy = "This field is required."
  }

  if (!Validator.isInt(data.accuracy, { min: 1, max: 5 })) {
    errors.accuracy = 'accuracy must be between 1 and 5';
  }

  if (Validator.isEmpty(data.communication)) {
    errors.communication = "This field is required."
  }

  if (!Validator.isInt(data.communication, { min: 1, max: 5 })) {
    errors.communication = 'communication must be between 1 and 5';
  }

  if (Validator.isEmpty(data.cleanliness)) {
    errors.cleanliness = "This field is required."
  }

  if (!Validator.isInt(data.cleanliness, { min: 1, max: 5 })) {
    errors.cleanliness = 'cleanliness must be between 1 and 5';
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = "This field is required."
  }

  if (!Validator.isInt(data.location, { min: 1, max: 5 })) {
    errors.location = 'location must be between 1 and 5';
  }

  if (Validator.isEmpty(data.check_in)) {
    errors.check_in = "This field is required."
  }

  if (!Validator.isInt(data.check_in, { min: 1, max: 5 })) {
    errors.check_in = 'check in must be between 1 and 5';
  }

  if (Validator.isEmpty(data.value)) {
    errors.value = "This field is required."
  }

  if (!Validator.isInt(data.value, { min: 1, max: 5 })) {
    errors.value = 'value must be between 1 and 5';
  }

  if (Validator.isEmpty(data.body)) {
    errors.body = "This field is required"
  }

  if (!Validator.isLength(data.body, { min: 1, max: 500 })) {
    errors.body = 'Body must be between 1 and 500 characters';
  }

  

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};