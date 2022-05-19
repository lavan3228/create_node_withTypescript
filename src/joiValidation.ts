const Joi = require("joi")

    const createUserValidation = Joi.object({
            name:Joi.string().min(2).max(16).required(),
            number:Joi.string().length(10).pattern(/^[0-9]+$/).required(),
            mail:Joi.string().email().required(),
            address:Joi.string().required()
        })

    const updateUserValidation = Joi.object({
            name:Joi.string().min(2).max(16).optional(),
            number:Joi.string().length(10).pattern(/^[0-9]+$/).optional(),
            mail:Joi.string().email().optional(),
            address:Joi.string().optional()
        })
    
module.exports = {createUserValidation,updateUserValidation};