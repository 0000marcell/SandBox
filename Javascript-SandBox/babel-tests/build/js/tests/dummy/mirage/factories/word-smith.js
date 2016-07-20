'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emberCliMirage = require('ember-cli-mirage');

exports.default = _emberCliMirage.Factory.extend({
  name: function name() {
    return _emberCliMirage.faker.name.firstName() + ' ' + _emberCliMirage.faker.name.lastName();
  }
});