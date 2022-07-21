const errorHandler = (err, _req, res, _next) => {
  return res.status(err.message.slice(-3))
    .json({ message: err.message.slice(0, -13) });
}

module.exports = errorHandler;
