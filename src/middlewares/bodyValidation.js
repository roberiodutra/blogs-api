const { httpStatus, errorMessages } = require('../helpers/index');

const loginValidation = (email, password, userExists, res) => {
  switch (true) {
    case !email || !password:
      return res.status(httpStatus.BAD_REQUEST).json(errorMessages.FIELDS_REQ);
    case !userExists:
      return res.status(httpStatus.BAD_REQUEST).json(errorMessages.INVALID_FIELDS);
    default:
      return false;
  }
};

module.exports = { loginValidation };
