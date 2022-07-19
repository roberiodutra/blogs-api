const express = require('express');

const postController = require('../controllers/postController');

const postRouter = express.Router();

postRouter.post('/', postController.add);
postRouter.get('/', postController.getAll);
postRouter.get('/:id', postController.getById);

module.exports = postRouter;
