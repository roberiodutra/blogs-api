const Joi = require('joi');
const { httpStatus, errorMessages: err } = require('../helpers');

const eConfig = (errors, status, message) => {
  errors.forEach((e) => { 
    e.code = status;
    e.message = message;
  });
  return errors;
}

module.exports = {
  loginVal: Joi.object({
    email: Joi.string(),
    password: Joi.string(),
  })
  .required()
  .error((errors) => eConfig(
    errors,
    httpStatus.BAD_REQUEST,
    err.FIELDS_REQ,
  )),

  checkBool: Joi.boolean()
    .invalid(true)
    .error((errors) => eConfig(
      errors,
      httpStatus.BAD_REQUEST,
      err.INVALID_FIELDS,
  )),

  userVal: Joi.object({
    displayName: Joi.string()
      .required()
      .min(8)
      .messages({
        'string.min': err.INVALID_NAME,
      }),
    email: Joi.string()
      .required()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
      })
      .messages({
        'string.email': err.INVALID_EMAIL,
      }),
    password: Joi.string()
      .required()
      .min(6)
      .messages({
        'string.min': err.INVALID_PASS,
      }),
    image: Joi.string()
      .required()
      .messages({
        'any.required': err.FIELDS_REQ,
      }),
  }),

  tokenVal: Joi.object({
    token: Joi.string()
      .required()
      .messages({
        'string.empty': err.TOKEN_N_FOUND,
      }),
  }),

  postVal: Joi.object({
    title: Joi.string()
      .required()
      .messages({
        'string.empty': err.FIELDS_REQ,
      }),
    content: Joi.string()
      .required()
      .messages({
        'string.empty': err.FIELDS_REQ,
      }),
    categoryIds: Joi.array()
      .items(Joi.number()
        .required()
        .messages({
          'any.required': err.FIELDS_REQ,
        })),
  }),
};
