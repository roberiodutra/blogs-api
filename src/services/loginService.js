const { User } = require('../database/models/index');
const { loginValidation } = require('../middlewares/bodyValidation');

const login = async (email, password, res) => {
  const userExists = await User.findOne(
    { where: { email, password } },
  );

  console.log(userExists);

  if (loginValidation(email, password, res, userExists)) return;
  return {};
};

module.exports = { login };
