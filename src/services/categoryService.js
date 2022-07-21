const { Category } = require('../database/models');
const { checkName } = require('../schemas');

const add = async ({ name }) => {
  await checkName.validateAsync(!name)

  const { dataValues } = await Category.create({ name });

  return dataValues;
};

const getAll = async () => {
  const data = await Category.findAll();
  return data;
};

module.exports = { add, getAll };
