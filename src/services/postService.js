const { Op } = require('sequelize');
const { BlogPost, PostCategory, Category, User } = require('../database/models');
const { httpStatus, errorMessages: err } = require('../helpers');
const { bodyVal } = require('../schemas');

const throwNewError = (message, status) => {
  const error = new Error(message);
  error.details = [{ type: status }];
  throw error;
};

const add = async (req) => {
  await bodyVal.validateAsync(req.body);

  const { title, content, categoryIds } = req.body;
  const { id: userId } = req.user;
  const { dataValues } = await BlogPost.create({ userId, title, content });

  const catIdExists = await Category.findAll({
    where: { id: categoryIds },
  });

  if (catIdExists.length === 0) {
    throwNewError(err.CAT_N_FOUND, httpStatus.BAD_REQUEST);
  }

  await Promise.all([
    categoryIds.map((categoryId) => (
      PostCategory.create({ postId: dataValues.id, categoryId })
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
  const postExists = await BlogPost.findAll({
    where: { id },
  });

  if (postExists.length === 0) {
    throwNewError(err.POST_N_FOUND, httpStatus.NOT_FOUND);
  }

  const post = await BlogPost.findByPk(id, {
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: 'password' },
    }, {
      model: Category,
      as: 'categories',
      attributes: ['id', 'name'],
    }],
  });

  return post;
};

const update = async (req) => {
  const { id: postId } = req.params;

  await bodyVal.validateAsync(req.body);

  const checkUser = await BlogPost.findAll({
    where: {
      id: postId,
      userId: req.user.id,
    },
  });

  if (checkUser.length === 0) {
    throwNewError(err.UNAUTHORIZED, httpStatus.UNAUTHORIZED);
  }

  await BlogPost.update(req.body,
    { where: { id: postId },
  });

  const data = await getById(postId);

  return data.dataValues;
};

const remove = async (req) => {
  const { id: postId } = req.params;

  await getById(postId);

  const checkUser = await BlogPost.findAll({
    where: {
      id: postId,
      userId: req.user.id,
    },
  });

  if (checkUser.length === 0) {
    throwNewError(err.UNAUTHORIZED, httpStatus.UNAUTHORIZED);
  }

  await BlogPost.destroy({ where: { id: postId } });
};

const search = async (term) => {
  const data = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.substring]: term } },
        { content: { [Op.substring]: term } },
      ],
    },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: 'password' },
    }, {
      model: Category,
      as: 'categories',
      attributes: ['id', 'name'],
    }],
  });

  return data;
};

module.exports = { add, getAll, getById, update, remove, search };
