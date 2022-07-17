const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateToken = (payload) =>
  jwt.sign(payload, SECRET, jwtConfig);

module.exports = generateToken;
