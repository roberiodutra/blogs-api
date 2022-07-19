const { User } = require('../database/models');
const { generateToken, errorMessages: err } = require('../helpers');
const { userVal } = require('../schemas/schemas');

const create = async (body) => {
  await userVal.validateAsync(body);
  const { email } = body;

  const userExists = await User.findOne({
    where: { email },
  });

  if (userExists) throw new Error(err.USER_A_REG);

  await User.create(body);

  const token = generateToken(body);
  return { token };
};

const getAll = async () => {
  const data = await User.findAll({
    attributes: { exclude: 'password' },
  });

  return data;
};

const getById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: 'password' },
  });
  return user;
}

module.exports = { create, getAll, getById };
