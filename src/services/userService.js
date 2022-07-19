const { User } = require('../database/models/user');
const { userVal } = require('../schemas/schemas');

const create = async ({ displayName }) => {
  await userVal.validateAsync({ displayName });
  await User.create(body);
};

module.exports = { create };
