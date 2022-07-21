const Joi = require('joi');
const { httpStatus, errorMessages: err } = require('../helpers');

const eConfig = (errors, status, message) => {
  errors.forEach((e) => { 
    e.code = status;
    e.message = message;
  });
  return errors;
};

module.exports = {
  bodyVal: Joi.object({
    email: Joi.string(),
    password: Joi.string(),
    title: Joi.string(),
    content: Joi.string(),
    categoryIds: Joi.array()
      .items(Joi.number()),
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

  checkName: Joi.boolean()
    .invalid(true)
    .error((errors) => eConfig(
      errors,
      httpStatus.BAD_REQUEST,
      err.NAME_REQUIRED,
  )),

  checkEmail: Joi.boolean()
    .invalid(false)
    .error((errors) => eConfig(
      errors,
      httpStatus.CONFLICT,
      err.USER_A_REG,
  )),

  checkUser: Joi.boolean()
    .invalid(true)
    .error((errors) => eConfig(
      errors,
      httpStatus.NOT_FOUND,
      err.USER_N_FOUND,
  )),

  userVal: Joi.object({
    displayName: Joi.string()
      .min(8)
      .error((errors) => eConfig(
        errors,
        httpStatus.BAD_REQUEST,
        err.INVALID_NAME,
      )),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
      })
      .error((errors) => eConfig(
        errors,
        httpStatus.BAD_REQUEST,
        err.INVALID_EMAIL,
      )),
    password: Joi.string()
      .min(6)
      .error((errors) => eConfig(
        errors,
        httpStatus.BAD_REQUEST,
        err.INVALID_PASS,
      )),
    image: Joi.any()
      .error((errors) => eConfig(
        errors,
        err.FIELDS_REQ,
        httpStatus.BAD_REQUEST,
      )),
  }).required(),

  tokenVal: Joi.object({
    token: Joi.string()
      .required()
      .error((errors) => eConfig(
        errors,
        httpStatus.UNAUTHORIZED,
        err.TOKEN_N_FOUND,
      )),
  }),
};
