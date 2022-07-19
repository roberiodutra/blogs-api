const { User } = require('../database/models/index');
const { errorMessages: err } = require('../helpers');
const { userVal } = require('../schemas/schemas');

const create = async (body) => {
  await userVal.validateAsync(body);
  const { email } = body;

  const userExists = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { email },
  });

  if (userExists) throw new Error(err.USER_A_REG);
  await User.create(body);
};

module.exports = { create };
