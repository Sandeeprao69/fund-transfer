/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  test: (req, res) => {
    try {
      let data = {};
      let faults = [];
      let maintenance = [];
      sails.packages.redis.mget(
        [
          sails.config.constants.organizationId + sails.config.constants.redisVehicleMaintenanceKeys.key2,
          sails.config.constants.organizationId + sails.config.constants.redisVehicleFaultsKeys.key2
        ],
        function(err, result) {
          data = {
            faults: JSON.parse(result[1]),
            maintenance: JSON.parse(result[0])
          };
          return res.ok(data);
        }
      );
    } catch (error) {
      sails.helpers.logger(req, 'error', error);
      return res.serverError(error);
    }
  },
  create: async (req, res) => {
    try {
      let dbUser = await Users.findOne({ email: req.body.email });
      if (dbUser) {
        return res.badRequest('A user with same email address already exists');
      }

      let user = await Users.create(req.body).fetch();
      generateToken(user, res, token => {
        return res.created({ user: user, token: token });
      });
    } catch (error) {
      return res.serverError('Database error');
    }
  },
  login: async (req, res) => {
    try {
      let user = await Users.findOne({ email: req.body.email });
      if (!user) {
        return res.badRequest('Please provide correct email address');
      }

      //Compare password
      var bcrypt = require('bcryptjs');
      bcrypt.compare(req.body.password, user.password, function(error, isCorrectPassword) {
        if (isCorrectPassword) {
          generateToken(user, res, token => {
            return res.ok({ user: user, token: token });
          });
        } else {
          return res.badRequest('Please provide correct password');
        }
      });
    } catch (error) {
      return res.serverError('Database error');
    }
  },
  /**
   * To get list of users
   */
  find: async (req, res) => {
    try {
      let users = await Users.find();
      return res.ok(users);
    } catch (error) {
      return res.serverError('Database error');
    }
  }
};

function generateToken(user, res, callback) {
  var moment = require('moment'),
    jwt = require('json-web-token');

  var tokenValidity = moment()
    .add(1, 'months')
    .unix();

  //create Token
  var payload = {
    iss: sails.config.constants.auth_provider,
    iat: moment().unix(),
    exp: tokenValidity,
    data: {
      user: user.id
    }
  };
  jwt.encode(sails.config.constants.jwtSecret, payload, function(error, jwtToken) {
    if (error) {
      return res.badRequest('We had trouble authenticating you. Please try again later.');
    }

    callback(jwtToken);
  });
}
