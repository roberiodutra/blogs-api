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

module.exports = { add };
