const express = require('express');

const categoryController = require('../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.post('/', categoryController.add);
categoryRouter.get('/', categoryController.getAll);

module.exports = categoryRouter;
