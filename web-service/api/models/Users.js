/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: { type: 'string', required: true },
    email: { type: 'string', required: true },
    password: { type: 'string', required: true },
    availableAmount:{type:'float',defaultsTo:25000}
  },

  beforeCreate: function(values, next) {
    if (values.password) {
      var bcrypt = require('bcryptjs');

      bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(values.password, salt, function(err, hash) {
          values.password = hash;
          next();
        });
      });
    } else {
      next();
    }
  }
};
