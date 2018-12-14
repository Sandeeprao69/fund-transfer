/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */
const validate = require('../extras/validate');
const validation = require('../extras/rules.js');
module.exports.policies = {

  UsersController:{
    create: [validate(validation.rules.users.create)],
    find:'isAuthenticated'
  },
  PaymentsController:{
    create:['isAuthenticated', validate(validation.rules.payments.create)],
    find:['isAuthenticated']
  }
 
};
