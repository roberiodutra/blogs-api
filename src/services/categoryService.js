const { Category } = require('../database/models');
const { errorMessages: err } = require('../helpers');

const add = async ({ name }) => {
  if (!name) throw new Error(err.NAME_REQUIRED);

  const { dataValues } = await Category.create({ name });

  return dataValues;
};

module.exports = { add };
