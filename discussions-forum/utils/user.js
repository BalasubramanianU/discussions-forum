const bcrypt = require("bcrypt");
const Joi = require("joi");

function validateLogin(user) {
  const schema = Joi.object({
    userName: Joi.string().min(1).max(255).required(),
    password: Joi.string().min(1).max(1024).required(),
  });

  return schema.validate(user);
}

function validateSignUp(user) {
  const schema = Joi.object({
    userName: Joi.string().min(1).max(255).required(),
    password: Joi.string().min(1).max(1024).required(),
  });

  return schema.validate(user);
}

function validateDiscussion(discussion) {
  const schema = Joi.object({
    userName: Joi.string().min(1).max(255).required(),
    password: Joi.string().min(1).max(1024).required(),
    discussion: Joi.object({
      topic: Joi.string().min(1).max(1024).required(),
      description: Joi.string().min(1).max(1024).required(),
    }),
  });

  return schema.validate(discussion);
}

function validateComment(comment) {
  const schema = Joi.object({
    userName: Joi.string().min(1).max(255).required(),
    password: Joi.string().min(1).max(1024).required(),
    topic: Joi.string().min(1).max(1024).required(),
    comment: Joi.string().min(1).max(1024).required(),
  });

  return schema.validate(comment);
}

async function passHash(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

module.exports = {
  passHash,
  validateLogin,
  validateSignUp,
  validateDiscussion,
  validateComment,
};
