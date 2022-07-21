const { httpStatus } = require('../helpers');
const userService = require('../services/userService');
const validateTokenService = require('../services/validateTokenService');

const create = async (req, res, next) => {
  try {
    const token = await userService.create(req.body);
    return res.status(httpStatus.CREATED).json(token);
  } catch (err) {
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    await validateTokenService.validate(req);

    const data = await userService.getAll();
  
    return res.status(httpStatus.OK).json(data);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    await validateTokenService.validate(req);

    const { id } = req.params;
    const data = await userService.getById(id);

    return res.status(httpStatus.OK).json(data);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    await validateTokenService.validate(req);

    await userService.remove(req);

    return res.status(httpStatus.NO_CONTENT).end();
  } catch (err) {
    next(err);
  }
};

module.exports = { create, getAll, getById, remove };
