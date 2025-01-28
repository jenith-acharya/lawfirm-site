const joi = require('joi');

const BlogCreateDTO = joi.object({
    authorname: joi.string().min(3).max(100).required(),
    date: joi.date().iso().required(), // Requires ISO 8601 date format
    title: joi.string().min(3).max(150).required(),
    photo: joi.string().uri().optional().default(null), // Assumes the photo is a URL
    description: joi.string().min(10).max(5000).required(),
    phone: joi.string()
        .pattern(/^[0-9]{10,15}$/)
        .message('Phone number must be between 10 to 15 digits')
        .required(),
    email: joi.string().email().required()
});

const BlogUpdateDTO = joi.object({
    authorname: joi.string().min(3).max(100).optional(),
    date: joi.date().iso().optional(), // Allows date updates in ISO format
    title: joi.string().min(3).max(150).optional(),
    photo: joi.string().uri().optional().default(null), // Optional URL
    description: joi.string().min(10).max(5000).optional(),
    phone: joi.string()
        .pattern(/^[0-9]{10,15}$/)
        .message('Phone number must be between 10 to 15 digits')
        .optional(),
    email: joi.string().email().optional()
});

module.exports = {
    BlogCreateDTO,
    BlogUpdateDTO
};
