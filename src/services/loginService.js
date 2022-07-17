const { User } = require('../database/models/index');
const { loginValidation } = require('../middlewares/bodyValidation');
const { generateToken } = require('../helpers/index');
const { schemas } = require('../schemas/schemas');

const login = async ({ email, password }) => {
  await schemas.validateAsync({ email, password });
  const userExists = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { email, password },
  });

  const token = generateToken(userExists.dataValues);
  return { token };
};

module.exports = { login };
