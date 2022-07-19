const { User } = require('../database/models');
const { generateToken, errorMessages: err } = require('../helpers');
const { loginVal } = require('../schemas');

const login = async (body) => {
  await loginVal.validateAsync(body);

  const userExists = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: body,
  });

  if (!userExists) throw new Error(err.INVALID_FIELDS);

  const token = generateToken(userExists.dataValues);
  return { token };
};

module.exports = { login };
