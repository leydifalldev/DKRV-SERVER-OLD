import Joi from "joi";

export const placeSchema = Joi.object().keys({
  step: Joi.number().required(),
  ref: Joi.string().required(),
  name: Joi.string().required(),
  //schedule: Joi.array(),
  address: Joi.string().required(),
  phone: Joi.string().min(9).max(13).required(),
  notation: Joi.number()
});