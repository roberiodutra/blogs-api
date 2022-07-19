const { httpStatus } = require('../helpers');
const userService = require('../services/userService');
const validateTokenService = require('../services/validateTokenService');

const add = async (req, res) => {
  try {
    await validateTokenService.validate(req);

    const data = await userService.add(req.body);
    return res.status(httpStatus.CREATED).json(data);
  } catch (e) {
    res.status(e.message.slice(-3))
      .json({ message: e.message.slice(0, -13) });
  }
};

module.exports = { add };
