/**
 * Payments.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    from: { model: 'users', required: true },
    to: { model: 'users', required: true },
    amount: { type: 'float', required: true }
  }
};
