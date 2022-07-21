const { User } = require('../database/models');
const { generateToken, errorMessages: err } = require('../helpers');
const { userVal, checkEmail, checkUser } = require('../schemas');

const create = async (body) => {
  await userVal.validateAsync(body);
  const { email } = body;

  const userExists = await User.findOne({
    where: { email },
  });

  await checkEmail.validateAsync(!userExists);

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

  await checkUser.validateAsync(!user);

  return user;
};

const remove = async (req) => {
  await User.destroy(
    { where: { id: req.user.id } },
  );
};

module.exports = { create, getAll, getById, remove };
