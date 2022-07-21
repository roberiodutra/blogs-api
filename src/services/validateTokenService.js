const jwt = require('jsonwebtoken');
const { tokenVal } = require('../schemas');
const { httpStatus, errorMessages: err } = require('../helpers');

const SECRET = process.env.JWT_SECRET;

const validate = async (req) => {
  const token = req.headers.authorization;
  
  await tokenVal.validateAsync({ token });
  jwt.verify(token, SECRET, (error, user) => {
    if (error) {
      const newError = new Error(err.INVALID_TOKEN);
      newError.details = [{ type: httpStatus.UNAUTHORIZED }];
      throw newError;
    }
    req.user = user;
  });
};

module.exports = { validate };
