const joi = require('joi');

// Define the allowed status types for validation
const statusType = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE'
};

const PracticeAreaCreateDTO = joi.object({
    name: joi.string().min(3).max(50).required(),
    description: joi.string().empty(null, '').optional().default(null),
    status: joi.string().valid(...Object.values(statusType)).required(),
});

const PracticeAreaUpdateDTO = joi.object({
    name: joi.string().min(3).max(50).optional(),
    description: joi.string().empty(null, '').optional().default(null),
    status: joi.string().valid(...Object.values(statusType)).optional(),
});

module.exports = {
    PracticeAreaCreateDTO,
    PracticeAreaUpdateDTO
};
