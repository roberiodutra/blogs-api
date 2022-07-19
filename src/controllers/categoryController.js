const { httpStatus } = require('../helpers');
const categoryService = require('../services/categoryService');
const validateTokenService = require('../services/validateTokenService');

const add = async (req, res) => {
  try {
    await validateTokenService.validate(req);

    const data = await categoryService.add(req.body);
    return res.status(httpStatus.CREATED).json(data);
  } catch (e) {
    res.status(e.message.slice(-3))
      .json({ message: e.message.slice(0, -13) });
  }
};

module.exports = { add };
