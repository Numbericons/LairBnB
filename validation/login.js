const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Enter a valid email.';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required.';
  }

  if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = 'Your password must be at least 8 characters. Please try again.'
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required.';
  }
  
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};