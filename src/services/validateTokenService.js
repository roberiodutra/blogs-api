const jwt = require('jsonwebtoken');
const { tokenVal } = require('../schemas');
const { errorMessages: err } = require('../helpers');

const SECRET = process.env.JWT_SECRET;

const validate = async (req) => {
  const token = req.headers.authorization;
  
  await tokenVal.validateAsync({ token });
  jwt.verify(token, SECRET, (error, user) => {
    if (error) {
      throw new Error(err.INVALID_TOKEN);
    } else {
      req.user = user;
    }
  });
};

module.exports = { validate };
