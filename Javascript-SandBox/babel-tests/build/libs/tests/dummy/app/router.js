'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

var _environment = require('./config/environment');

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _ember2.default.Router.extend({
  location: _environment2.default.locationType
});

Router.map(function () {
  this.route('contacts', { path: '/' });
  this.route('contact', { path: '/:contact_id' });
  this.route('edit', { path: '/:contact_id/edit' });

  this.route('friends');
  this.route('friend', { path: '/friends/:friend_id' });
  this.route('close-friends');
  this.route('pets');

  this.route('word-smith', { path: '/word-smiths/:word_smith_id' });
});

exports.default = Router;