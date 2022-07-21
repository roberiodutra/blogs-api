const { httpStatus } = require('../helpers');
const postService = require('../services/postService');
const validateTokenService = require('../services/validateTokenService');

const add = async (req, res, next) => {
  try {
    await validateTokenService.validate(req);

    const data = await postService.add(req);

    return res.status(httpStatus.CREATED).json(data);
  } catch (err) {
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    await validateTokenService.validate(req);

    const data = await postService.getAll();

    return res.status(httpStatus.OK).json(data);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    await validateTokenService.validate(req);

    const { id } = req.params;
    const data = await postService.getById(id);

    return res.status(httpStatus.OK).json(data);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    await validateTokenService.validate(req);

    const data = await postService.update(req);

    return res.status(httpStatus.OK).json(data);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    await validateTokenService.validate(req);

    await postService.remove(req);

    return res.status(httpStatus.NO_CONTENT).end();
  } catch (err) {
    next(err);
  }
};

const search = async (req, res, next) => {
  try {
    await validateTokenService.validate(req);

    const { q } = req.query;
    const data = await postService.search(q);

    return res.status(httpStatus.OK).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = { add, getAll, getById, update, remove, search };
