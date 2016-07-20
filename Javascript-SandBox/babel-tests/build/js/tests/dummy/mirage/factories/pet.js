'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emberCliMirage = require('ember-cli-mirage');

var _emberCliMirage2 = _interopRequireDefault(_emberCliMirage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var names = ['Rex', 'Toby', 'Sam', 'Andy', 'Lassie', 'Annibal', 'Spark'];

exports.default = _emberCliMirage2.default.Factory.extend({
  alive: true,

  name: function name(i) {
    return names[i % names.length];
  }
});