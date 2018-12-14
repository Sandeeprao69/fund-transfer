/**
 * Utility function to validate request with provided schema
 *
 * @param {object} schema Joi rules to validate request
 * @author Sandeep <sandeeprao69@gmail.com>
 */
module.exports = schema => {
    return function(req, res, next) {
      const Joi = require('joi');
  
      if (schema.hasOwnProperty('body')) {
        Joi.validate(req.body, schema.body, (error, data) => {
          if (error) return res.badRequest(error.details);
          next();
        });
      }
  
      if (schema.hasOwnProperty('query')) {
        Joi.validate(req.query, schema.query, (error, data) => {
          if (error) return res.badRequest(error.details);
          next();
        });
      }
    };
  };
  