const { httpStatus } = require('../helpers');
const userService = require('../services/userService');

const create = async (req, res) => {
  try {
    await userService.create();
    return res.status(httpStatus.OK).json();
  } catch (err) {
    res.status().json({message: err.message});
  }
};

module.exports = create;
