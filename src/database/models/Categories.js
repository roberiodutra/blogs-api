module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('Categories', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  }, {
    tableName: 'Categories',
    timestamps: false,
    underscored: true,
  });

  return categories;
};
