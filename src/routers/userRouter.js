const express = require('express');

const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/', userController.create);
userRouter.get('/', userController.getAll);
userRouter.get('/:id', userController.getById);
userRouter.delete('/me', userController.remove);

module.exports = userRouter;
