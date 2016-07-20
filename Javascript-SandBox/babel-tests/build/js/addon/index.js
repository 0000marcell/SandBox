'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.belongsTo = exports.hasMany = exports.RestSerializer = exports.JSONAPISerializer = exports.ActiveModelSerializer = exports.Serializer = exports.Collection = exports.Model = exports.faker = exports.Response = exports.Factory = undefined;

var _factory = require('./factory');

var _factory2 = _interopRequireDefault(_factory);

var _response = require('./response');

var _response2 = _interopRequireDefault(_response);

var _faker = require('./faker');

var _faker2 = _interopRequireDefault(_faker);

var _model = require('./orm/model');

var _model2 = _interopRequireDefault(_model);

var _collection = require('./orm/collection');

var _collection2 = _interopRequireDefault(_collection);

var _serializer = require('./serializer');

var _serializer2 = _interopRequireDefault(_serializer);

var _activeModelSerializer = require('./serializers/active-model-serializer');

var _activeModelSerializer2 = _interopRequireDefault(_activeModelSerializer);

var _jsonApiSerializer = require('./serializers/json-api-serializer');

var _jsonApiSerializer2 = _interopRequireDefault(_jsonApiSerializer);

var _restSerializer = require('./serializers/rest-serializer');

var _restSerializer2 = _interopRequireDefault(_restSerializer);

var _hasMany = require('./orm/associations/has-many');

var _hasMany2 = _interopRequireDefault(_hasMany);

var _belongsTo = require('./orm/associations/belongs-to');

var _belongsTo2 = _interopRequireDefault(_belongsTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasMany() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(_hasMany2.default, [null].concat(args)))();
}
function belongsTo() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return new (Function.prototype.bind.apply(_belongsTo2.default, [null].concat(args)))();
}

exports.Factory = _factory2.default;
exports.Response = _response2.default;
exports.faker = _faker2.default;
exports.Model = _model2.default;
exports.Collection = _collection2.default;
exports.Serializer = _serializer2.default;
exports.ActiveModelSerializer = _activeModelSerializer2.default;
exports.JSONAPISerializer = _jsonApiSerializer2.default;
exports.RestSerializer = _restSerializer2.default;
exports.hasMany = hasMany;
exports.belongsTo = belongsTo;
exports.default = {
  Factory: _factory2.default,
  Response: _response2.default,
  hasMany: hasMany,
  belongsTo: belongsTo
};