'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startMirage = startMirage;

var _readModules = require('ember-cli-mirage/utils/read-modules');

var _readModules2 = _interopRequireDefault(_readModules);

var _environment = require('../config/environment');

var _environment2 = _interopRequireDefault(_environment);

var _config = require('../mirage/config');

var _config2 = _interopRequireDefault(_config);

var _server = require('ember-cli-mirage/server');

var _server2 = _interopRequireDefault(_server);

var _assign2 = require('lodash/object/assign');

var _assign3 = _interopRequireDefault(_assign2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ember-cli-mirage',
  initialize: function initialize(application) {
    if (arguments.length > 1) {
      // Ember < 2.1
      var container = arguments[0],
          application = arguments[1];
    }

    if (_shouldUseMirage(_environment2.default.environment, _environment2.default['ember-cli-mirage'])) {
      startMirage(_environment2.default);
    }
  }
};
function startMirage() {
  var env = arguments.length <= 0 || arguments[0] === undefined ? _environment2.default : arguments[0];

  var environment = env.environment;
  var modules = (0, _readModules2.default)(env.modulePrefix);
  var options = (0, _assign3.default)(modules, { environment: environment, baseConfig: _config2.default, testConfig: _config.testConfig });

  return new _server2.default(options);
}

function _shouldUseMirage(env, addonConfig) {
  var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
  var defaultEnabled = _defaultEnabled(env, addonConfig);

  return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
}

/*
  Returns a boolean specifying the default behavior for whether
  to initialize Mirage.
*/
function _defaultEnabled(env, addonConfig) {
  var usingInDev = env === 'development' && !addonConfig.usingProxy;
  var usingInTest = env === 'test';

  return usingInDev || usingInTest;
}