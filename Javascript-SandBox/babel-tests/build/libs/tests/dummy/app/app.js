'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

var _resolver = require('./resolver');

var _resolver2 = _interopRequireDefault(_resolver);

var _loadInitializers = require('ember/load-initializers');

var _loadInitializers2 = _interopRequireDefault(_loadInitializers);

var _environment = require('./config/environment');

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = void 0;

_ember2.default.MODEL_FACTORY_INJECTIONS = true;

App = _ember2.default.Application.extend({
  modulePrefix: _environment2.default.modulePrefix,
  podModulePrefix: _environment2.default.podModulePrefix,
  Resolver: _resolver2.default
});

(0, _loadInitializers2.default)(App, _environment2.default.modulePrefix);

exports.default = App;