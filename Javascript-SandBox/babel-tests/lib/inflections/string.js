'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singularize = exports.pluralize = undefined;

var _inflector = require('./inflector');

var _inflector2 = _interopRequireDefault(_inflector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pluralize(word) {
  return _inflector2.default.inflector.pluralize(word);
}

function singularize(word) {
  return _inflector2.default.inflector.singularize(word);
}

exports.pluralize = pluralize;
exports.singularize = singularize;