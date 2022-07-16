module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('Categories', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    tableName: 'Categories',
    timestamps: false,
    underscored: true,
  });

  return categories;
};
