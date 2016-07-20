'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ember2.default.Route.extend({

  actions: {
    createPet: function createPet() {
      var controller = this.controllerFor('pets');
      var name = controller.get('petName');
      controller.set('petName', '');
      this.store.createRecord('pet', { name: name, alive: true });
    }
  },

  setupController: function setupController(controller, model) {
    if (this.get('error')) {
      controller.set('error', this.get('error'));
    } else {
      controller.set('model', model);
    }
  },
  model: function model() {
    var _this = this;

    return this.store.findAll('pet').catch(function (reason) {
      var errorMsg = reason.responseJSON ? reason.responseJSON.errors[0] : reason.errors[0];
      _this.set('error', errorMsg);
    });
  }
});