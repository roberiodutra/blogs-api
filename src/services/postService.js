const { BlogPost, PostCategory } = require('../database/models');
const { errorMessages: err } = require('../helpers');
const { postVal } = require('../schemas/schemas');

const add = async (req) => {
  await postVal.validateAsync(req.body);

  const { title, content, categoryIds } = req.body;
  const { id: userId } = req.user;
  const { dataValues } = await BlogPost.create(
    { userId, title, content },
  );

  await Promise.all([
    categoryIds.map((categoryId) => (
      PostCategory.create({
        postId: dataValues.id,
        categoryId,
      })
    )),
  ]);

  return dataValues;
};

module.exports = { add };
