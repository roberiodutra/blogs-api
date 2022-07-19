const { httpStatus } = require('../helpers');
const postService = require('../services/postService');
const validateTokenService = require('../services/validateTokenService');

const add = async (req, res) => {
  try {
    await validateTokenService.validate(req);

    const data = await postService.add(req);
    return res.status(httpStatus.CREATED).json(data);
  } catch (e) {
    res.status(e.message.slice(-3))
      .json({ message: e.message.slice(0, -13) });
  }
};

const getAll = async (req, res) => {
  try {
    await validateTokenService.validate(req);

    const data = await postService.getAll();
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
    const data = await postService.getById(id);

    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    res.status(e.message.slice(-3))
      .json({ message: e.message.slice(0, -13) });
  }
};

module.exports = { add, getAll, getById };
