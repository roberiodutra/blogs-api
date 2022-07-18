module.exports = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostCategories', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    tableName: 'PostCategories',
    timestamps: false,
  });

  PostCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      through: PostCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
    });

    models.Categories.belongsToMany(models.BlogPosts, {
      through: PostCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'posts',
    });
  };

  return PostCategories;
};