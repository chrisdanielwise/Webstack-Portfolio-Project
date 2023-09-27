const Dotenv = require('dotenv-webpack');

module.exports = function override(config, env) {
  // Add dotenv-webpack as a plugin
  config.plugins = config.plugins.concat([
    new Dotenv({
      path: './.env', // Path to your .env file (adjust the path if necessary)
      safe: false, // Load .env.example (if it exists) instead of .env
      systemvars: false, // Load system environment variables as well
    }),
  ]);

  return config;
};
