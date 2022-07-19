const { User } = require('../database/models/user');

const create = async (body) => {
  await User.create(body);
};

module.exports = { create };
