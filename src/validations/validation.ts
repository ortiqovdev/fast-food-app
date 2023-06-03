import joi from "joi";

export const authJoi = joi.object({
    username: joi
        .string()
        .min(5)
        .max(30)
        .required(),
    phone: joi
        .string()
        .length(17)
        .required()
})