module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { 
    id: {type: DataTypes.INTEGER, primaryKey: true},
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'Users',
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPosts, {
      foreignKey: 'userId',
      as: 'blogPosts',
    });
  };

  return User;
};
