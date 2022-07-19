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

  userVal: Joi.object({
    displayName: Joi.string()
      .required()
      .min(8)
      .messages({
        'string.min': err.INVALID_NAME,
      }),
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .messages({
        'string.email': err.INVALID_EMAIL,
      }),
  }),
};
