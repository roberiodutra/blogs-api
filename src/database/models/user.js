module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { 
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'User',
    timestamps: false,
    underscored: true,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPosts, {
      foreignKey: 'userId',
      as: 'blogPosts',
    });
  };

  return User;
};
