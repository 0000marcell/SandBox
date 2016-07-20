'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emberData = require('ember-data');

var _emberData2 = _interopRequireDefault(_emberData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _emberData2.default.Model.extend({

  name: _emberData2.default.attr(),

  blogPosts: _emberData2.default.hasMany()

});