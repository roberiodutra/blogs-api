const express = require('express');

const categoryController = require('../controllers/loginController');

const categoryRouter = express.Router();

categoryRouter.post('/', categoryController);

module.exports = categoryRouter;
