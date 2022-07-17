const loginService = require('../services/loginService');
const { httpStatus } = require('../helpers/index');

const loginController = async (req, res) => {
  try {
    const token = await loginService.login(req.body, res);
    return res.status(200).json(token);
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).json({message: err.message});
  }
};

module.exports = loginController;
