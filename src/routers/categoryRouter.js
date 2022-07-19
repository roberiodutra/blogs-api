const express = require('express');

const categoryController = require('../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.post('/', categoryController.add);

module.exports = categoryRouter;
