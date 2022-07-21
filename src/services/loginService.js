const { User } = require('../database/models');
const { generateToken } = require('../helpers');
const { loginVal, checkBool } = require('../schemas');

const login = async (body) => {
  await loginVal.validateAsync(body);

  const userExists = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: body,
  });

  await checkBool.validateAsync(!userExists);

  const token = generateToken(userExists.dataValues);
  return { token };
};

module.exports = { login };
