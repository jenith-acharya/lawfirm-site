const { hasPermission } = require('../../middlewares/rbac.miiddleware');
const { uploadFile } = require('../../middlewares/uploader.middleware');
const authcontroller = require('./auth.controller');
const {setPath} = require('../../middlewares/uploader.middleware');
const { loginCheck } = require('../../middlewares/auth.middleware');
const {bodyValidator} = require('../../middlewares/validator.middleware');
const { LoginDTO } = require('./auth.request');
const { userCreateDTO } = require('../user/user.request');


const authRouter = require('express').Router();


//register user route


authRouter.post('/login',bodyValidator(LoginDTO),authcontroller.loginUser);

authRouter.get('/me',loginCheck,authcontroller.getLoggedInUser);











module.exports = authRouter
;