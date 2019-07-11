const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.username = validText(data.username) ? data.username : '';
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';
  // data.password2 = validText(data.password2) ? data.password2 : '';

  if (!Validator.isLength(data.username, { min: 1, max: 30 })) {
    errors.username = 'Username must be at least 1 character. Please try again.';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username is required.';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required.';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Enter a valid email.';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required.';
  }

  if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = 'Your password must be at least 8 characters. Please try again.';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};