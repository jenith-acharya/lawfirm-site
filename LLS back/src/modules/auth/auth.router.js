const { hasPermission } = require('../../middlewares/rbac.miiddleware');
const { uploadFile } = require('../../middlewares/uploader.middleware');
const authcontroller = require('./auth.controller');
const {setPath} = require('../../middlewares/uploader.middleware');
const { loginCheck } = require('../../middlewares/auth.middleware');
const {bodyValidator} = require('../../middlewares/validator.middleware');
const { LoginDTO, registerUserDTO } = require('./auth.request');


const authRouter = require('express').Router();



authRouter.post('/register',bodyValidator(registerUserDTO),authcontroller.registerUser)
authRouter.post('/login',bodyValidator(LoginDTO),authcontroller.loginUser);

authRouter.get('/me',loginCheck,authcontroller.getLoggedInUser);











module.exports = authRouter
;