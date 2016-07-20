'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resolver = require('../../resolver');

var _resolver2 = _interopRequireDefault(_resolver);

var _environment = require('../../config/environment');

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolver = _resolver2.default.create();

resolver.namespace = {
  modulePrefix: _environment2.default.modulePrefix,
  podModulePrefix: _environment2.default.podModulePrefix
};

exports.default = resolver;