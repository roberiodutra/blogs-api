const { httpStatus, errorMessages } = require('../helpers/index');

const loginValidation = (email, password, res, userExist) => {
  switch (true) {
    case !email || !password:
      return res.status(httpStatus.BAD_REQUEST).json(errorMessages.FIELDS_REQ);
    case !userExist:
      return res.status(httpStatus.BAD_REQUEST).json(errorMessages.INVALID_FIELDS);
    default:
      return false;
  }
};

module.exports = { loginValidation };
