const joi = require('joi');

const LoginDTO = joi.object({
    email: joi.string().email().required(),
    password : joi.string().required()
});

const registerUserDTO = joi.object({
    fullName,
    email,
    password,
    image,
    role,
    facebook,
    linkedin,

})

module.exports= {
    LoginDTO,
    registerUserDTO
}
