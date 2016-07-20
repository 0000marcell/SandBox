'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _activeModelSerializer = require('./active-model-serializer');

var _activeModelSerializer2 = _interopRequireDefault(_activeModelSerializer);

var _inflector = require('../utils/inflector');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _activeModelSerializer2.default.extend({
  keyForModel: function keyForModel(type) {
    return (0, _inflector.camelize)(type);
  },
  keyForAttribute: function keyForAttribute(attr) {
    return (0, _inflector.camelize)(attr);
  },
  keyForRelationship: function keyForRelationship(type) {
    return (0, _inflector.pluralize)((0, _inflector.camelize)(type));
  },
  keyForRelationshipIds: function keyForRelationshipIds(type) {
    return (0, _inflector.camelize)(type) + 'Ids';
  }
});