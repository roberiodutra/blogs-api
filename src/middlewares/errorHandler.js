const { httpStatus } = require('../helpers');

module.exports = (err, _req, res, _next) => {
  res.status(
    err.details[0].type || httpStatus.INTERNAL_SERVER,
  )
    .json({
      message: err.message,
    });
};
