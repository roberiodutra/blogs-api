const Joi = require('joi');
const { errorMessages } = require('../helpers/index');

module.exports = {
  schemas: Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'string.empty': errorMessages.FIELDS_REQ,
      'string.email': 'Invalid email format',
    }),
  password: Joi.string()
    .required()
    .messages({
      'string.empty': errorMessages.FIELDS_REQ,
    }),
  }),
};
