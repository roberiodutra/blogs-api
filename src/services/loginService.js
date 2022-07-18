const { User } = require('../database/models/index');
const { generateToken } = require('../helpers/index');
const { loginVal } = require('../schemas/schemas');
const { errorMessages: err } = require('../helpers/');

const login = async ({ email, password }) => {
  await loginVal.validateAsync({ email, password });

  const userExists = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { email, password },
  });

  if (!userExists) throw new Error(err.INVALID_FIELDS);

  const token = generateToken(userExists.dataValues);
  return { token };
};

module.exports = { login };
