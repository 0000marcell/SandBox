'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emberCliMirage = require('ember-cli-mirage');

exports.default = _emberCliMirage.JSONAPISerializer.extend({
  include: ['blogPosts']
});