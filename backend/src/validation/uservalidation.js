import Joi from 'joi';

const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(2)
            .max(50)
            .trim()
            .lowercase()
            .required(),
        email: Joi.string()
            .email()
            .regex(/\S+@\S+\.\S+/)
            .min(3)
            .max(100)
            .trim()
            .required(),
        password: Joi.string()
            .alphanum()
            .min(8)
            .required()
    });
    return Joi.validate(data, schema);
};



export default registerValidation;