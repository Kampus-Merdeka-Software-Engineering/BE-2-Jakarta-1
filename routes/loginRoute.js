const loginController = require('controllers/loginController.js');
const express = require('express');
const loginRouter = express.Router();

loginRouter.post('/', loginController.authentication);


module.exports = loginRouter;

