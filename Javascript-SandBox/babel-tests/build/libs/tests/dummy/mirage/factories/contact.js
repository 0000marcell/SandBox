'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emberCliMirage = require('ember-cli-mirage');

var _emberCliMirage2 = _interopRequireDefault(_emberCliMirage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _emberCliMirage2.default.Factory.extend({
  title: _emberCliMirage.faker.list.cycle('Duke', 'Developer', 'Artist'),
  name: _emberCliMirage.faker.name.firstName,
  age: 20,

  email: function email(i) {
    return 'person' + i + '@test.com';
  },
  admin: function admin() {
    return this.age > 30;
  }
});