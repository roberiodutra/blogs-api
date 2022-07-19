const jwt = require('jsonwebtoken');
const { tokenVal } = require('../schemas/schemas');
const { errorMessages: err } = require('../helpers');

const SECRET = process.env.JWT_SECRET;

const validate = async (req) => {
  const token = req.headers.authorization;
  
  await tokenVal.validateAsync({ token });

  try {
    jwt.verify(token, SECRET);
  } catch (e) {
    throw new Error(err.INVALID_TOKEN)
  }
};

module.exports = { validate };
