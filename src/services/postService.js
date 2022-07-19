const { BlogPost, PostCategory, Category, User } = require('../database/models');
const { errorMessages: err } = require('../helpers');
const { postVal } = require('../schemas');

const add = async (req) => {
  await postVal.validateAsync(req.body);

  const { title, content, categoryIds } = req.body;
  const { id: userId } = req.user;
  const { dataValues } = await BlogPost.create(
    { userId, title, content },
  );

  const catIdExists = await Category.findAll({
    where: { id: categoryIds },
  });

  if (catIdExists.length === 0) throw new Error(err.CAT_N_FOUND);

  await Promise.all([
    categoryIds.map((categoryId) => (
      PostCategory.create({
        postId: dataValues.id, categoryId,
      })
    )),
  ]);

  return dataValues;
};

const getAll = async () => {
  const data = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: 'password' },
      },
      {
        model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
      }],
  });

  return data;
};

const getById = async (id) => {
  const post = await BlogPost.findByPk(id);
  return post;
};

module.exports = { add, getAll, getById };
