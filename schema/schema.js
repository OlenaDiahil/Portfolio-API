const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorit: Joi.boolean(),
  avatar: Joi.string(),
});

const updateStatusContactSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const projectSchema = Joi.object({
  name: Joi.string().required(),
  technologies: Joi.string().required(),
  img: Joi.string(),
});

module.exports = {contactSchema, updateStatusContactSchema, projectSchema}