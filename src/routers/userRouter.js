const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/', userController.create);
userRouter.get('/', userController.getAll);

module.exports = userRouter;
