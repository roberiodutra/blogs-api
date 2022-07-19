const { httpStatus } = require('../helpers');
const userService = require('../services/userService');

const create = async (req, res) => {
  try {
    await userService.create(req.body);
    return res.status(httpStatus.CREATED).json();
  } catch (e) {
    console.log(['TEST', e])
    res.status(e.message.slice(-3))
      .json({message: e.message.slice(0, -13)});
  }
};

module.exports = { create };
