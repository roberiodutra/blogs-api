const loginService = require('../services/loginService');
const { httpStatus } = require('../helpers');

const loginController = async (req, res) => {
  try {
    const token = await loginService.login(req.body);
    return res.status(httpStatus.OK).json(token);
  } catch (e) {
    res.status(e.message.slice(-3))
      .json({ message: e.message.slice(0, -13) });
  }
};

module.exports = loginController;
