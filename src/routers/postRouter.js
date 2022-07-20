const express = require('express');

const postController = require('../controllers/postController');

const postRouter = express.Router();

postRouter.post('/', postController.add);
postRouter.get('/', postController.getAll);
postRouter.get('/search', postController.search);
postRouter.get('/:id', postController.getById);
postRouter.put('/:id', postController.update);
postRouter.delete('/:id', postController.remove);

module.exports = postRouter;
