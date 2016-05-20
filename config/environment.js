var _ = require('lodash');

var localEnvVars = {
  TITLE:          'Auth App',
  SAFE_TITLE:     'project04',
  TOKEN_SECRET:   'andafinalsecretsadasitis'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
