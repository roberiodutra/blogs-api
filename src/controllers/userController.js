const { httpStatus } = require('../helpers');
const userService = require('../services/userService');
const validateTokenService = require('../services/validateTokenService');

const create = async (req, res) => {
  try {
    const token = await userService.create(req.body);
    return res.status(httpStatus.CREATED).json(token);
  } catch (e) {
    res.status(e.message.slice(-3))
      .json({ message: e.message.slice(0, -13) });
  }
};

const getAll = async (req, res) => {
  try {
    await validateTokenService.validate(req);

    const data = await userService.getAll();

    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    res.status(e.message.slice(-3))
      .json({ message: e.message.slice(0, -13) });
  }
};

const getById = async (req, res) => {
  try {
    await validateTokenService.validate(req);

    const { id } = req.params;
    const data = await userService.getById(id);

    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    res.status(e.message.slice(-3))
      .json({ message: e.message.slice(0, -13) });
  }
};

module.exports = { create, getAll, getById };
