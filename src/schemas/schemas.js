const Joi = require('joi');
const { errorMessages: err } = require('../helpers/');

module.exports = {
  loginVal: Joi.object({
  email: Joi.string()
    .required()
    .messages({
      'string.empty': err.FIELDS_REQ,
    }),
  password: Joi.string()
    .required()
    .messages({
      'string.empty': err.FIELDS_REQ,
    }),
  }),
};
