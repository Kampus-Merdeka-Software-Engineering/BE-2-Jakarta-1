const userController = require('controllers/userController.js')
const express = require('express');
const userRouter = express.Router();

// POST - CREATE method
userRouter.post('/', userController.createUser);
// GET - READ method
userRouter.get('/', userController.getUser);
// GET User By Id
userRouter.get('/', userController.getUserById);
// PATCH - UPDATE method
userRouter.patch('/', userController.updateUser);
// DELETE method
userController.delete('/', userController.deleteuser);



module.exports = userRouter;