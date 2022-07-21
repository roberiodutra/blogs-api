module.exports = (err, _req, res, _next) => {
  res.status(
    err.details[0].type,
  )
    .json({
      message: err.message,
    });
};
