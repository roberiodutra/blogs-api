const express = require('express');

const loginController = require('../controllers/loginController');

const loginRouter = express.Router();

loginRouter.use('/', loginController);

module.exports = loginRouter;
