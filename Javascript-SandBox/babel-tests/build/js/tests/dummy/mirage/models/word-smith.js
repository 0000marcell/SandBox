'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emberCliMirage = require('ember-cli-mirage');

exports.default = _emberCliMirage.Model.extend({

  blogPosts: (0, _emberCliMirage.hasMany)()

});