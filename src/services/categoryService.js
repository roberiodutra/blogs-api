const { Category } = require('../database/models');
const { errorMessages: err } = require('../helpers');

const add = async ({ name }) => {
  if (!name) throw new Error(err.NAME_REQUIRED);

  const { dataValues } = await Category.create({ name });

  return dataValues;
};

const getAll = async () => {
  const data = await Category.findAll();
  return data;
};

module.exports = { add, getAll };
