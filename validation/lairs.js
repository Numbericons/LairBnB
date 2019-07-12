const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLairInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.description = validText(data.description) ? data.description : '';
  data.location = validText(data.location) ? data.location : '';
  data.lng = Validator.isFloat(data.lng) ? data.lng : '';
  data.lat = Validator.isFloat(data.lat) ? data.lat : '';
  data.city = validText(data.city) ? data.city : '';
  data.country = validText(data.country) ? data.country : '';
  data.rate = Validator.isInt(data.rate) ? data.rate : '';
  data.max_guests = Validator.isInt(data.max_guests) ? data.max_guests : '';
  data.type = validText(data.type) ? data.type : '';
  data.owner_id = Validator.isInt(data.owner_id) ? data.owner_id : '';

  data.torture_chamber = validText(data.torture_chamber) ? Validator.toBoolean(data.torture_chamber) : 'false';
  data.minions = validText(data.minions) ? Validator.toBoolean(data.minions) : 'false';
  data.wi_fi = validText(data.wi_fi) ? Validator.toBoolean(data.wi_fi) : 'false';
  data.hero_detector = validText(data.hero_detector) ? Validator.toBoolean(data.hero_detector) : 'false';
  data.pool = validText(data.pool) ? Validator.toBoolean(data.pool) : 'false';
  data.cemetery = validText(data.cemetery) ? Validator.toBoolean(data.cemetery) : 'false';

  if (!Validator.isLength(data.name, { min: 5, max: 140 })) {
    errors.name = 'Name must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (!Validator.isLength(data.description, { min: 5, max: 140 })) {
    errors.description = 'Description must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  }

  if (!Validator.isLength(data.location, { min: 5, max: 140 })) {
    errors.location = 'Location must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = 'Location field is required';
  }

  if (!Validator.isFloat(data.lng)) {
    errors.lng = 'Longitude must be a float';
  }

  if (Validator.isEmpty(data.lng)) {
    errors.lng = 'Longitude field is required';
  }
  
  if (!Validator.isFloat(data.lat)) {
    errors.lat = 'Latitude must be a float';
  }

  if (Validator.isEmpty(data.lat)) {
    errors.lat = 'Latitude field is required';
  }

  if (!Validator.isLength(data.city, { min: 5, max: 140 })) {
    errors.city = 'City must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.city)) {
    errors.city = 'City field is required';
  }

  if (!Validator.isLength(data.country, { min: 5, max: 140 })) {
    errors.country = 'Country must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.country)) {
    errors.country = 'Country field is required';
  }

  if (!Validator.isLength(data.rate, { min: 5, max: 140 })) {
    errors.rate = 'Rate must be between 5 and 140 characters';
  }

  if (Validator.isEmpty(data.rate)) {
    errors.rate = 'Rate field is required';
  }

  if (!Validator.isInt(data.rate, { min: 1, max: 100000})) {
    errors.rate = 'Rate must be an integer between 1 and 100000, inclusive';
  }
  
  if (!Validator.isInt(data.max_guests, { min: 1, max: 16 })) {
    errors.max_guests = 'Maximum guests must be between 1 and 16';
  }

  if (Validator.isEmpty(data.max_guests)) {
    errors.max_guests = 'Maximum guests field is required';
  }

  if (!Validator.isLength(data.type, { min: 5, max: 140 })) {
    errors.type = 'Type must be between 1 and 140 characters';
  }

  if (Validator.isEmpty(data.type)) {
    errors.max_guests = 'Type field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};