const Joi = require('joi');

module.exports.rules = {
  users: {
    create: {
      body: {
        password: Joi.string()
          .min(8)
          .max(24)
          .required(),
        email: Joi.string()
          .email()
          .required(),
        name: Joi.string().max(24)
      }
    },
    login: {
      body: {
        password: Joi.string()
          .min(8)
          .max(24)
          .required(),
        email: Joi.string()
          .email()
          .required()
      }
    }
  },
  payments: {
    create: {
      body: {
        to: Joi.string().required(),
        amount: Joi.number().required()
      }
    }
  }
};
