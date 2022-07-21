const loginService = require('../services/loginService');
const { httpStatus } = require('../helpers');

const loginController = async (req, res, next) => {
  try {
    const token = await loginService.login(req.body);
    return res.status(httpStatus.OK).json(token);
  } catch (err) {
    next(err);
  }
};

module.exports = loginController;
