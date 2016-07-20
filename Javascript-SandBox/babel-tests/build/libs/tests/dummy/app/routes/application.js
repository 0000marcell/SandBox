'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ember2.default.Route.extend({

  actions: {
    createContact: function createContact() {
      var controller = this.controllerFor('contacts');
      var name = controller.get('newName');
      var newContact = this.store.createRecord('contact', { name: name });
      controller.set('newName', '');

      return newContact.save();
    },
    saveContact: function saveContact(contact) {
      var _this = this;

      return contact.save().then(function (contact) {
        _this.transitionTo('contact', contact);
      });
    },
    deleteContact: function deleteContact(contact) {
      var _this2 = this;

      return contact.destroyRecord().then(function () {
        _this2.transitionTo('contacts');
      });
    }
  }

});