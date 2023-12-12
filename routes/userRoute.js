const userController = require('controllers/userController.js')
const express = require('express');
const userRouter = express.Router();

// POST - CREATE method
userRouter.post('/', userController.createUser);
// GET - READ method
userRouter.get('/', userController.getUser);
// GET User By Id
userRouter.get('/userId', userController.getUserById);
// PATCH - UPDATE method
userRouter.patch('/userId', userController.updateUser);
// DELETE method
userRouter.delete('/userId', userController.deleteuser);



module.exports = userRouter;