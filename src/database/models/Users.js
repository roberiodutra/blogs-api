module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', { 
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'Users',
    timestamps: false,
    underscored: true,
  });

  Users.associate = (models) => {
    Users.hasMany(models.BlogPosts, {
      foreignKey: 'userId',
      as: 'blogPosts',
    });
  };

  return Users;
};
