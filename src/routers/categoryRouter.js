const express = require('express');

const categoryController = require('../controllers/loginController');

const categoryRouter = express.Router();

categoryRouter.post('/', categoryController.add);

module.exports = categoryRouter;
