const joi = require('joi');

const teamCreateDTO = joi.object ({
    title: joi.string().min(3).max(50).optional(),
    link: joi.string().uri().empty(null,'').optional().default(null),
    image: joi.string().required(),
    
})
