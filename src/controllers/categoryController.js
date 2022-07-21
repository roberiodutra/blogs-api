const { httpStatus } = require('../helpers');
const categoryService = require('../services/categoryService');
const validateTokenService = require('../services/validateTokenService');

const add = async (req, res, next) => {
  try {
    await validateTokenService.validate(req);

    const data = await categoryService.add(req.body);

    return res.status(httpStatus.CREATED).json(data);
  } catch (err) {
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    await validateTokenService.validate(req);

    const data = await categoryService.getAll();

    return res.status(httpStatus.OK).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = { add, getAll };
