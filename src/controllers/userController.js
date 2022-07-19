const { httpStatus } = require('../helpers');
const userService = require('../services/userService');

const create = async (req, res) => {
  try {
    const token = await userService.create(req.body);
    return res.status(httpStatus.CREATED).json(token);
  } catch (e) {
    res.status(e.message.slice(-3))
      .json({ message: e.message.slice(0, -13) });
  }
};

const getAll = async (_req, res) => {
  try {
    const data = await userService.getAll();
    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { create };
