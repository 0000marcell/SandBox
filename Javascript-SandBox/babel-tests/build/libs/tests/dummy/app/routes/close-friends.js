'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ember2.default.Route.extend({
  model: function model() {
    var store = this.get('store');
    return store.query('friend', { ids: [1, 3] }).then(function () {
      // I request 2 friends and then return all friends to be sure no other friend
      // was loaded into the store.
      return store.peekAll('friend');
    });
  }
});