/**
 * isAuthenticated
 *
 * @module          policies/isAuthenticated
 * @description     Verifies that the request is being made by an authenticated
 *                  user with an active profile
 * @author          Sandeep rao
 * @docs            http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {
  var token = req.headers.authorization ? req.headers.authorization : null;
  if (!token) return res.forbidden('You did not provide an authorization token.');

  // const extractedToken = token.split(' ');
  // if (extractedToken[0] !== 'Bearer' || !extractedToken[1]) return res.badRequest('Invalid token. Please send a valid bearer token.');

  // token = extractedToken[1];

  // Decode and verify the token
  var jwt = require('json-web-token'),
    moment = require('moment');

  jwt.decode(sails.config.constants.jwtSecret, token, function(jwtError, decodedTokenPayload) {
    if (jwtError) {
      sails.log.info('Invalid token');
      return res.badRequest('You provided an invalid authorization token.');
    }

    var now = moment().format('YYYY-MM-DD'),
      exp = moment(decodedTokenPayload.exp * 1000).format('YYYY-MM-DD'),
      sessionValid = moment(now).isBefore(exp);
    sails.log.info('Token is valid till -' + sessionValid);
    if (decodedTokenPayload.iss === sails.config.constants.auth_provider && sessionValid) {
      // Check if the user exists and if their profile is active
      Users.findOne({ id: decodedTokenPayload.data.user })
        .populateAll()
        .exec(function(databaseError, userRecord) {
          if (databaseError) {
            return res.serverError('Database error.');
          }

          if (!userRecord) {
            return res.notFound('Could not find your user account details in the database. Please log out and log in again.');
          }

          // Strip the password so it cannot be accessed by the controller
          delete userRecord.password;

          // Attach the user record to the request object
          req.user = userRecord;

          // Continue to controller
          next();
        });
    } else {
      sails.log('Token expired');
      return res.forbidden('You provided an invalid authorization token.');
    }
  });
};
