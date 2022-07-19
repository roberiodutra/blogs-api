const { User } = require('../database/models/user');
const { userVal } = require('../schemas/schemas');

const create = async (body) => {
  await userVal.validateAsync(body);
  await User.create(body);
};

module.exports = { create };
